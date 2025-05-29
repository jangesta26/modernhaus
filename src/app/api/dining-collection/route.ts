  import { DiningCollectionProps } from '@/types/dining-products';
import { NextResponse } from 'next/server';

export async function GET() {

  const diningCollections: DiningCollectionProps[] = [
    {
      id: 1,
      name: "Modern Elegance Collection",
      image: "https://readdy.ai/api/search-image?query=elegant%2520modern%2520dining%2520room%2520set%2520with%2520marble%2520table%2520and%2520upholstered%2520chairs%252C%2520sophisticated%2520design%252C%2520neutral%2520colors%252C%2520styled%2520setting%2520with%2520decorative%2520elements%252C%2520professional%2520interior%2520photography%252C%2520high-end%2520dining%2520furniture%2520collection&width=500&height=300&seq=112&orientation=landscape",
      startingPrice: 2499
    },
    {
      id: 2,
      name: "Rustic Farmhouse Collection",
      image: "https://readdy.ai/api/search-image?query=rustic%2520farmhouse%2520dining%2520room%2520set%2520with%2520large%2520wooden%2520table%2520and%2520mixed%2520seating%252C%2520warm%2520wood%2520tones%252C%2520country%2520charm%252C%2520styled%2520setting%2520with%2520decorative%2520elements%252C%2520professional%2520interior%2520photography%252C%2520high-end%2520dining%2520furniture%2520collection&width=500&height=300&seq=113&orientation=landscape",
      startingPrice: 1999
    },
    {
      id: 3,
      name: "Scandinavian Minimalist Collection",
      image: "https://readdy.ai/api/search-image?query=scandinavian%2520minimalist%2520dining%2520room%2520set%2520with%2520light%2520wood%2520table%2520and%2520simple%2520chairs%252C%2520clean%2520lines%252C%2520bright%2520aesthetic%252C%2520styled%2520setting%2520with%2520minimal%2520decorative%2520elements%252C%2520professional%2520interior%2520photography%252C%2520high-end%2520dining%2520furniture%2520collection&width=500&height=300&seq=114&orientation=landscape",
      startingPrice: 1799
    },
    {
      id: 4,
      name: "Industrial Loft Collection",
      image: "https://readdy.ai/api/search-image?query=industrial%2520style%2520dining%2520room%2520set%2520with%2520metal%2520and%2520wood%2520table%2520and%2520chairs%252C%2520urban%2520aesthetic%252C%2520raw%2520materials%252C%2520styled%2520setting%2520with%2520industrial%2520decorative%2520elements%252C%2520professional%2520interior%2520photography%252C%2520high-end%2520dining%2520furniture%2520collection&width=500&height=300&seq=115&orientation=landscape",
      startingPrice: 2199
    }
  ];
 return NextResponse.json(diningCollections);
}
