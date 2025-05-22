import { CartItem } from '@/types/cartItem';
import { NextResponse } from 'next/server';

export async function GET() {
  const cart: CartItem[] = [
    {
      id: 1,
      name: "Modern Velvet Sofa",
      price: 1299,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=luxurious%20modern%20velvet%20sofa%20in%20light%20gray%20color%2C%20elegant%20design%20with%20slim%20metal%20legs%2C%20comfortable%20cushions%2C%20clean%20lines%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece&width=300&height=300&seq=5&orientation=squarish",
    },
    {
      id: 2,
      name: "Minimalist Coffee Table",
      price: 499,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=minimalist%20wooden%20coffee%20table%20with%20sleek%20design%2C%20natural%20oak%20finish%2C%20slim%20metal%20legs%2C%20modern%20aesthetic%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20clean%20lines&width=300&height=300&seq=6&orientation=squarish",
    },
    {
      id: 3,
      name: "Scandinavian Bed Frame",
      price: 899,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=scandinavian%20style%20wooden%20bed%20frame%2C%20natural%20oak%20finish%2C%20simple%20clean%20lines%2C%20minimalist%20design%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20modern%20bedroom%20furniture&width=300&height=300&seq=7&orientation=squarish",
    },
  ];

return NextResponse.json(cart);
}