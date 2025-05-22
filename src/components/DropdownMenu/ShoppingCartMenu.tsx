'use client'
import { CartItem } from '@/types/cartItem';
import { Button } from '../ui/button';
import Image from 'next/image';

interface ShoppingCartMenuProps {
  cartItems: CartItem[];
  subtotal: number;
  removeFromCart: (id: number) => void;
}

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({
  cartItems,
  subtotal,
  removeFromCart,
}) => {
  return (
    <div className="absolute -right-22 mt-2 w-70 max-w-sm sm:max-w-sm md:w-80 md:right-0 bg-white rounded-lg shadow-xl z-50 border border-gray-100 sm:right-4 xs:right-2">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3">Shopping Cart</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 pr-1">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Image 
                src={item.image} 
                alt={item.name} 
                width={64} 
                height={64} 
                className="object-cover rounded" 
              
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">${item.price}</span>
                  <span className="text-xs text-gray-400">×</span>
                  <span className="text-sm text-gray-600">{item.quantity}</span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 mt-4 pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal:</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full !rounded-button whitespace-nowrap"
              onClick={() => window.location.href = '/cart'}
            >
              View Cart
            </Button>
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap"
              onClick={() => window.location.href = '/checkout'}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartMenu;
