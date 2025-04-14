'use client';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
    _id: string;
    title: string;
    brand: string;
    currentPrice: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
    ageRange: string;
    category: string[];
}

const DealsAndDiscounts = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/products`);
                const data = await response.json();
                setProducts(data.data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="py-10 mx-auto px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Combos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0,4).map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
};

export default DealsAndDiscounts;