import { FeaturedProducts } from '@/types/featured-products';
import { NextResponse } from 'next/server';

export async function GET() {
const featuredProducts: FeaturedProducts[] = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    price: 1299,
    image: "https://readdy.ai/api/search-image?query=luxurious%20modern%20velvet%20sofa%20in%20light%20gray%20color%2C%20elegant%20design%20with%20slim%20metal%20legs%2C%20comfortable%20cushions%2C%20clean%20lines%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece&width=300&height=300&seq=5&orientation=squarish",
    category: "Living Room",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    price: 499,
    image: "https://readdy.ai/api/search-image?query=minimalist%20wooden%20coffee%20table%20with%20sleek%20design%2C%20natural%20oak%20finish%2C%20slim%20metal%20legs%2C%20modern%20aesthetic%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20clean%20lines&width=300&height=300&seq=6&orientation=squarish",
    category: "Living Room",
    rating: 4.6,
    isNew: false,
  },
  {
    id: 3,
    name: "Scandinavian Bed Frame",
    price: 899,
    image: "https://readdy.ai/api/search-image?query=scandinavian%20style%20wooden%20bed%20frame%2C%20natural%20oak%20finish%2C%20simple%20clean%20lines%2C%20minimalist%20design%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20modern%20bedroom%20furniture&width=300&height=300&seq=7&orientation=squarish",
    category: "Bedroom",
    rating: 4.9,
    isNew: true,
  },
  {
    id: 4,
    name: "Marble Dining Table",
    price: 1499,
    image: "https://readdy.ai/api/search-image?query=elegant%20marble%20top%20dining%20table%20with%20slim%20black%20metal%20legs%2C%20modern%20design%2C%20white%20marble%20with%20subtle%20veining%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20sophisticated%20dining%20furniture&width=300&height=300&seq=8&orientation=squarish",
    category: "Dining",
    rating: 4.7,
    isNew: false,
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 399,
    image: "https://readdy.ai/api/search-image?query=modern%20ergonomic%20office%20chair%20with%20mesh%20back%2C%20adjustable%20height%2C%20sleek%20black%20design%2C%20comfortable%20seating%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20contemporary%20office%20furniture&width=300&height=300&seq=9&orientation=squarish",
    category: "Office",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 6,
    name: "Rattan Accent Chair",
    price: 349,
    image: "https://readdy.ai/api/search-image?query=stylish%20rattan%20accent%20chair%20with%20comfortable%20cushion%2C%20natural%20woven%20texture%2C%20modern%20bohemian%20design%2C%20wooden%20legs%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20living%20room%20accent%20piece&width=300&height=300&seq=10&orientation=squarish",
    category: "Living Room",
    rating: 4.4,
    isNew: false,
  },
  {
    id: 7,
    name: "Floating Wall Shelf",
    price: 129,
    image: "https://readdy.ai/api/search-image?query=modern%20floating%20wall%20shelf%20in%20natural%20wood%20finish%2C%20sleek%20minimalist%20design%2C%20clean%20lines%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20furniture%20piece%2C%20contemporary%20home%20decor%20item&width=300&height=300&seq=11&orientation=squarish",
    category: "Decor",
    rating: 4.3,
    isNew: true,
  },
  {
    id: 8,
    name: "Pendant Light Fixture",
    price: 249,
    image: "https://readdy.ai/api/search-image?query=contemporary%20pendant%20light%20fixture%20with%20brass%20finish%2C%20modern%20geometric%20design%2C%20elegant%20lighting%20solution%2C%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20home%20decor%20item%2C%20sophisticated%20lighting&width=300&height=300&seq=12&orientation=squarish",
    category: "Lighting",
    rating: 4.7,
    isNew: false,
  },
];

 return NextResponse.json(featuredProducts);
}
