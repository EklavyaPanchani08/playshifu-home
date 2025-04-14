'use client';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import AgeFilterPills from './AgeFilterPills';
import Link from 'next/link';

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

const ShopByAge = () => {
    const [selectedAge, setSelectedAge] = useState('4-6 yrs');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/products?ageRange=${selectedAge}`);
                const data = await response.json();
                setProducts(data.data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedAge]);

    return (
        <section className="py-10 mx-auto px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Shop by age</h2>
            <hr />
            <AgeFilterPills selectedAge={selectedAge} onAgeSelect={setSelectedAge} />
            <hr />
            <Link href={'/shop'} className="text-md font-medium my-2 underline flex justify-end">View all</Link>
            {loading ? (
                <div className="flex justify-center items-center min-h-[100px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ShopByAge;