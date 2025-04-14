"use client";
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { useEvent } from '@/hooks/useEvent';

interface ProductCardProps {
  _id: string;
  title: string;
  discount?: number;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

interface CartItem {
  _id: string;
  title: string;
  currentPrice: number;
  image: string;
  quantity: number;
}

const ProductCard = ({
  _id,
  title,
  discount,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  image,
  description
}: ProductCardProps) => {

  const [isAdding, setIsAdding] = useState(false);
  const { dispatch } = useEvent("onCartEvent");
  const handleAddToCart = () => {
    try {
      setIsAdding(true);
      // GET EXISTING CART ITEMS FROM LOCALSTORAGE
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

      // CHECK IF ITEM ALREADY EXISTS IN CART
      const existingItemIndex = existingCart.findIndex((item: CartItem) => item._id === _id);

      if (existingItemIndex !== -1) {
        existingCart[existingItemIndex].quantity += 1;
      } else {
        const newItem: CartItem = {
          _id,
          title,
          currentPrice,
          image,
          quantity: 1
        };
        existingCart.push(newItem);
      }

      // SAVE UPDATED CART BACK TO LOCALSTORAGE
      setTimeout(() => {
        localStorage.setItem('cart', JSON.stringify(existingCart));
        dispatch([]);
        setIsAdding(false);
      }, 500);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart');
      setIsAdding(false);
    }
  };

  return (
    <div className="relative group shadow-xl rounded-lg">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {discount && (
          <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-br-lg">
            {discount}% off
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
          <FaRegHeart className="text-lg" />
        </button>

        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/80 hover:bg-white rounded-full px-3 py-1 shadow-md">
          <span className="text-primary text-sm">★</span>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-600">{reviews}</span>
        </div>
      </div>
      <div className='p-3'>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-green-700">Now ₹{currentPrice}</span>
          <span className="text-gray-500 line-through">₹{originalPrice}</span>
        </div>

        <span className="text-xl font-bold mb-2">{title}</span>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 bg-primary rounded-full font-semibold transition-colors
            ${isAdding ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'}`}
        >
          {isAdding ? 'Adding...' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;