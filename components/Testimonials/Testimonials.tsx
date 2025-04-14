'use client';
import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {

    const testimonials = [
        {
            image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2FB1bMvyQht3S.jpg&w=1920&q=75",
            username: 'reddreameers',
            text: 'Diwali gift for her son! What are you waiting for?es...'
        },
        {
            image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2FB1bMvyQht3S.jpg&w=1920&q=75",
            username: 'reddreameers',
            text: 'Diwali gift for her son! What are you waiting for?es...'
        },
        {
            image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2FB1bMvyQht3S.jpg&w=1920&q=75",
            username: 'reddreameers',
            text: 'Diwali gift for her son! What are you waiting for?es...'
        },
    ];

    return (
        <section className="py-10 mx-auto px-8 border-t-2 border-b-2">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-10">
                What kids, parents and teaches love
            </h2>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] transition-transform duration-300"
                        >
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8">
                <h3 className="text-2xl font-extrabold text-gray-800">Rated 4.8 out of 5</h3>
                <p className="text-gray-600">based on 50,000 reviews</p>
            </div>
        </section>
    );
};

export default Testimonials;