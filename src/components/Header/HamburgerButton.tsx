import { Menu, X } from 'lucide-react';

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="md:hidden text-gray-600 hover:text-indigo-600 cursor-pointer z-50"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default HamburgerButton;
