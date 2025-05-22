'use client';
import React, { useState, useEffect } from 'react';
import { fetchCartItems } from '@/lib/api';
import Sofa from '@/icons/Sofa';
import { CircleUserRound, Heart, ShoppingCart } from 'lucide-react';
import ShoppingCartMenu from '../DropdownMenu/ShoppingCartMenu';
import SearchBar from '@/Input/SearchBar';
import Link from 'next/link';
import UserMenuOpen from '../DropdownMenu/UserMenuOpen';
import HamburgerButton from './HamburgerButton';
import MobileSlidingMenu from './MobileSlidingMenu';
import { CartItem } from '@/types/cartItem';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<'cart' | 'user' | 'isOpen' | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    loadCart();
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleMobileMenu = () => {
    const willOpen = !(activeMenu === 'isOpen' && isMobileMenuOpen);
    setActiveMenu(willOpen ? 'isOpen' : null);
    setIsMobileMenuOpen(willOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto p-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex-auto text-2xl font-bold text-gray-800 flex items-center">
            <Sofa />
            <span className="hidden md:block flex-auto">ModernHaus</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <SearchBar />

          {/* Heart */}
          <button
            className="text-gray-600 hover:text-indigo-600 relative"
            onClick={() => setActiveMenu(null)}
          >
            <Heart />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </button>

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveMenu(activeMenu === 'cart' ? null : 'cart');
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-600 hover:text-indigo-600 relative"
            >
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </button>
            {activeMenu === 'cart' && (
              <ShoppingCartMenu
                cartItems={cartItems}
                subtotal={subtotal}
                removeFromCart={removeFromCart}
              />
            )}
          </div>

          {/* User */}
          <div className="relative">
            <button
              onClick={() => {
                setActiveMenu(activeMenu === 'user' ? null : 'user');
                setIsMobileMenuOpen(false); // Close mobile
              }}
              className="text-gray-600 hover:text-indigo-600"
            >
              <CircleUserRound />
            </button>
            {activeMenu === 'user' && <UserMenuOpen />}
          </div>

          {/* Hamburger */}
          <HamburgerButton
            isOpen={activeMenu === 'isOpen' && isMobileMenuOpen}
            toggle={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileSlidingMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
    </header>
  );
};

export default Header;
