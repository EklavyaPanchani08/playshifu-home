"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaRegHeart, FaSearch } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
import Logo from '../assets/image/logo.png';
import { useEvent } from '@/hooks/useEvent';

interface CartItem {
  _id: string;
  title: string;
  currentPrice: number;
  image: string;
  quantity: number;
}

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { } = useEvent("onCartEvent", () => updateCartCount());

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
    const count = cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  const handleCartClick = () => {
    setShowCart(!showCart);
    updateCartCount();
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateCartCount();
  };

  return (
    <>
      <header className="bg-primary py-4 px-8 flex justify-between items-center sticky top-0 z-50 gap-2">
        <div className="flex items-center xl:gap-20 lg:gap-14 gap-8 flex-1">
          <Image src={Logo} alt="PlayShifu" className="lg:h-10 h-8 w-auto" />
          <div className="relative flex-1 max-w-xl hidden md:block">
            <input
              type="text"
              placeholder="Search for PlayShifu Toys"
              className="w-full px-4 py-3 rounded-full focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary rounded-full p-2.5 text-white">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center lg:gap-10 gap-4">
          <button className="flex items-center text-secondary gap-2">
            <FaRegHeart className="text-xl" />
            <span className="md:block hidden text-md">Wishlist</span>
          </button>
          <button className="flex items-center text-secondary gap-2">
            <FaRegCircleUser className="text-xl" />
            <span className="md:block hidden">Sign In</span>
          </button>
          <div className="relative">
            <button
              onClick={handleCartClick}
              className='flex items-center text-secondary gap-2 relative'
            >
              <MdOutlineShoppingCart className="text-xl" />
              <span className="md:block hidden text-md">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 md:-right-5 -right-2.5 bg-red-500 text-white md:text-xs text-[7px] rounded-full md:w-5 md:h-5 w-3 h-3 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {showCart && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Shopping Cart ({cartCount})</h3>
                    <button onClick={() => setShowCart(false)}>
                      <IoMdClose className="text-xl" />
                    </button>
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="max-h-96 overflow-auto">
                        {cartItems.map((item) => (
                          <div key={item._id} className="flex items-center gap-3 mb-3 pb-3 border-b">
                            <div className="relative w-16 h-16">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.title}</h4>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-green-700">₹{item.currentPrice}</span>
                                <div className="flex items-center gap-2">
                                  <span>Qty: {item.quantity}</span>
                                  <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <IoMdClose />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between mb-4">
                          <span className="font-bold">Total:</span>
                          <span className="font-bold">₹{cartItems.reduce((total, item) => total + (item.currentPrice * item.quantity), 0)}</span>
                        </div>
                        <button className="w-full bg-secondary text-white py-2 rounded-full hover:bg-secondary-dark">
                          Checkout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <button className="md:hidden"><FaBars /></button>
        </div>
      </header>
      <div className="relative flex-1 max-w-xl mx-auto px-3 my-5 md:hidden block">
        <input
          type="text"
          placeholder="Search for PlayShifu Toys"
          className="w-full px-4 py-3 rounded-full focus:outline-none bg-gray-200"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary rounded-full p-2.5 text-white">
          <FaSearch />
        </button>
      </div>
    </>
  );
}