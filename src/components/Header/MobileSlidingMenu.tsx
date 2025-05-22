'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Sofa from '@/icons/Sofa';
import { Separator } from '@radix-ui/react-separator';

interface MobileSlidingMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileSlidingMenu: React.FC<MobileSlidingMenuProps> = ({ isOpen, closeMenu }) => {

  // Auto-close on screen resize to md and up
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="relative p-3 flex items-center justify-between border-b-2">
            <Link href="/" className="flex-auto text-2xl font-bold text-gray-800 flex items-center">
                <Sofa />
                <span className='text-xl'>ModernHaus</span>
          </Link>
            <Button 
            variant='outline' 
            onClick={closeMenu} 
            aria-label="Close menu"
            className='rounded-full hover:text-rose-600 shadow'
            size='icon'
            >
            <X className="hover:text-indigo-600 font-semibold" />
            </Button>
        </div>
        {/* Links */}
        <div className="w-full px-6 flex flex-col items-center space-y-3 mt-6">
          <Link href="#something" onClick={closeMenu} className="text-lg font-semibold hover:text-indigo-600">Home</Link>
          <Separator className='w-full border'/>
          <Link href="#something" onClick={closeMenu} className="text-lg font-semibold hover:text-indigo-600">Shop</Link>
          <Separator className='w-full border'/>
          <Link href="#something" onClick={closeMenu} className="text-lg font-semibold hover:text-indigo-600">About</Link>
          <Separator className='w-full border'/>
          <Link href="#something" onClick={closeMenu} className="text-lg font-semibold hover:text-indigo-600">Contact</Link>
          <Separator className='w-full border'/>
          <Link href="#something" onClick={closeMenu} className="text-lg font-semibold hover:text-indigo-600">View Cart</Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-30"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default MobileSlidingMenu;
