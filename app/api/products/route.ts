import { NextResponse } from "next/server";
import Product from "@/server/models/Product";
import connectDB from "@/server/lib/mongodb";

let isConnected = false;
export async function GET(request: Request) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }

    // Get URL and parse query parameters
    const { searchParams } = new URL(request.url);
    const queryObject: Record<string, unknown> = {};

    // Build query object from searchParams
    searchParams.forEach((value, key) => {
      if (value) {
        if (key === "ageRange") {
          queryObject[key] = value.replace(" yrs", ""); // Remove 'yrs' from age range
        } else if (key === "category") {
          queryObject[key] = { $in: [value] }; // Search in array of categories
        } else {
          queryObject[key] = value;
        }
      }
    });

    // Validate query parameters
    const validFields = ["category", "ageRange"];
    const invalidParams = Object.keys(queryObject).filter(
      (key) => !validFields.includes(key)
    );

    if (invalidParams.length > 0) {
      return NextResponse.json(
        { error: `Invalid query parameters: ${invalidParams.join(", ")}` },
        { status: 400 }
      );
    }

    // Execute query
    const products = await Product.find(queryObject);

    if (products.length === 0) {
      return NextResponse.json(
        { message: "No products found matching the criteria" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
