  import { DiningProductsProps } from '@/types/dining-products';
import { NextResponse } from 'next/server';

export async function GET() {
  
  const diningProducts: DiningProductsProps[] = [
    {
      id: 1,
      name: "Marble Dining Table",
      price: 1499,
      image: "https://readdy.ai/api/search-image?query=elegant%2520marble%2520top%2520dining%2520table%2520with%2520slim%2520black%2520metal%2520legs%252C%2520modern%2520design%252C%2520white%2520marble%2520with%2520subtle%2520veining%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520furniture%2520piece%252C%2520sophisticated%2520dining%2520furniture&width=300&height=300&seq=8&orientation=squarish",
      category: "Dining",
      rating: 4.7,
      isNew: false,
      style: "Modern",
      material: "Marble"
    },
    {
      id: 2,
      name: "Walnut Dining Set",
      price: 2899,
      image: "https://readdy.ai/api/search-image?query=premium%2520walnut%2520dining%2520table%2520and%2520chairs%2520set%252C%2520mid-century%2520modern%2520design%252C%2520rich%2520wood%2520grain%252C%2520comfortable%2520upholstered%2520chairs%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture%2520set&width=300&height=300&seq=101&orientation=squarish",
      category: "Dining",
      rating: 4.9,
      isNew: true,
      style: "Mid-Century",
      material: "Wood"
    },
    {
      id: 3,
      name: "Glass Top Dining Table",
      price: 1299,
      image: "https://readdy.ai/api/search-image?query=modern%2520glass%2520top%2520dining%2520table%2520with%2520chrome%2520base%252C%2520contemporary%2520design%252C%2520clear%2520tempered%2520glass%252C%2520sleek%2520metal%2520frame%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=102&orientation=squarish",
      category: "Dining",
      rating: 4.5,
      isNew: false,
      style: "Contemporary",
      material: "Glass"
    },
    {
      id: 4,
      name: "Upholstered Dining Chairs (Set of 4)",
      price: 899,
      image: "https://readdy.ai/api/search-image?query=set%2520of%2520four%2520elegant%2520upholstered%2520dining%2520chairs%252C%2520light%2520beige%2520fabric%252C%2520wooden%2520legs%252C%2520comfortable%2520seating%252C%2520modern%2520design%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=103&orientation=squarish",
      category: "Dining",
      rating: 4.6,
      isNew: false,
      style: "Traditional",
      material: "Fabric"
    },
    {
      id: 5,
      name: "Industrial Dining Set",
      price: 1899,
      image: "https://readdy.ai/api/search-image?query=industrial%2520style%2520dining%2520set%2520with%2520reclaimed%2520wood%2520table%2520and%2520metal%2520frame%2520chairs%252C%2520rustic%2520finish%252C%2520distressed%2520wood%252C%2520black%2520metal%2520accents%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=104&orientation=squarish",
      category: "Dining",
      rating: 4.8,
      isNew: true,
      style: "Industrial",
      material: "Wood"
    },
    {
      id: 6,
      name: "Extendable Dining Table",
      price: 1699,
      image: "https://readdy.ai/api/search-image?query=modern%2520extendable%2520dining%2520table%252C%2520white%2520lacquer%2520finish%252C%2520sleek%2520design%252C%2520adjustable%2520length%252C%2520space-saving%2520furniture%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=105&orientation=squarish",
      category: "Dining",
      rating: 4.7,
      isNew: false,
      style: "Modern",
      material: "Engineered Wood"
    },
    {
      id: 7,
      name: "Leather Dining Chairs (Set of 2)",
      price: 699,
      image: "https://readdy.ai/api/search-image?query=pair%2520of%2520modern%2520leather%2520dining%2520chairs%252C%2520cognac%2520brown%2520leather%252C%2520metal%2520frame%252C%2520sleek%2520design%252C%2520comfortable%2520seating%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=106&orientation=squarish",
      category: "Dining",
      rating: 4.4,
      isNew: false,
      style: "Contemporary",
      material: "Leather"
    },
    {
      id: 8,
      name: "Scandinavian Dining Set",
      price: 2199,
      image: "https://readdy.ai/api/search-image?query=scandinavian%2520style%2520dining%2520set%2520with%2520light%2520wood%2520table%2520and%2520matching%2520chairs%252C%2520minimalist%2520design%252C%2520clean%2520lines%252C%2520natural%2520wood%2520finish%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=107&orientation=squarish",
      category: "Dining",
      rating: 4.9,
      isNew: true,
      style: "Scandinavian",
      material: "Wood"
    },
    {
      id: 9,
      name: "Dining Bench",
      price: 499,
      image: "https://readdy.ai/api/search-image?query=modern%2520dining%2520bench%2520with%2520upholstered%2520seat%252C%2520wooden%2520legs%252C%2520gray%2520fabric%252C%2520minimalist%2520design%252C%2520versatile%2520seating%2520option%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=108&orientation=squarish",
      category: "Dining",
      rating: 4.5,
      isNew: false,
      style: "Modern",
      material: "Fabric"
    },
    {
      id: 10,
      name: "Rustic Farmhouse Dining Table",
      price: 1599,
      image: "https://readdy.ai/api/search-image?query=rustic%2520farmhouse%2520dining%2520table%252C%2520reclaimed%2520wood%252C%2520distressed%2520finish%252C%2520sturdy%2520construction%252C%2520traditional%2520design%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=109&orientation=squarish",
      category: "Dining",
      rating: 4.8,
      isNew: false,
      style: "Farmhouse",
      material: "Wood"
    },
    {
      id: 11,
      name: "Modern Buffet Cabinet",
      price: 1299,
      image: "https://readdy.ai/api/search-image?query=modern%2520dining%2520room%2520buffet%2520cabinet%252C%2520white%2520and%2520wood%2520finish%252C%2520storage%2520solution%252C%2520clean%2520lines%252C%2520contemporary%2520design%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=110&orientation=squarish",
      category: "Dining",
      rating: 4.6,
      isNew: true,
      style: "Modern",
      material: "Engineered Wood"
    },
    {
      id: 12,
      name: "Round Dining Table",
      price: 1199,
      image: "https://readdy.ai/api/search-image?query=elegant%2520round%2520dining%2520table%252C%2520dark%2520wood%2520finish%252C%2520pedestal%2520base%252C%2520traditional%2520design%252C%2520space-efficient%252C%2520on%2520plain%2520white%2520background%252C%2520professional%2520product%2520photography%252C%2520high-end%2520dining%2520furniture&width=300&height=300&seq=111&orientation=squarish",
      category: "Dining",
      rating: 4.7,
      isNew: false,
      style: "Traditional",
      material: "Wood"
    }
  ];

 return NextResponse.json(diningProducts);
}
