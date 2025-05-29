import { DiningInspirationProps } from '@/types/dining-products';
import { NextResponse } from 'next/server';

export async function GET() {

  const inspirationGallery:DiningInspirationProps[] = [
    {
      id: 1,
      title: "Minimalist Dining Space",
      image: "https://readdy.ai/api/search-image?query=minimalist%2520dining%2520room%2520interior%2520with%2520clean%2520lines%252C%2520neutral%2520colors%252C%2520modern%2520furniture%252C%2520large%2520windows%252C%2520natural%2520light%252C%2520styled%2520with%2520minimal%2520decor%252C%2520professional%2520interior%2520photography%252C%2520inspirational%2520dining%2520space%2520design&width=400&height=500&seq=116&orientation=portrait",
      description: "Create a serene dining environment with clean lines and a neutral palette."
    },
    {
      id: 2,
      title: "Cozy Family Dining",
      image: "https://readdy.ai/api/search-image?query=warm%2520and%2520cozy%2520family%2520dining%2520room%2520with%2520wooden%2520table%252C%2520comfortable%2520chairs%252C%2520warm%2520lighting%252C%2520styled%2520with%2520homey%2520decor%252C%2520professional%2520interior%2520photography%252C%2520inviting%2520dining%2520space%2520for%2520gatherings%252C%2520inspirational%2520dining%2520design&width=400&height=500&seq=117&orientation=portrait",
      description: "A warm, inviting space perfect for family meals and gatherings."
    },
    {
      id: 3,
      title: "Luxe Dining Experience",
      image: "https://readdy.ai/api/search-image?query=luxurious%2520dining%2520room%2520with%2520elegant%2520furniture%252C%2520chandelier%252C%2520rich%2520textures%252C%2520sophisticated%2520color%2520scheme%252C%2520styled%2520with%2520high-end%2520decor%252C%2520professional%2520interior%2520photography%252C%2520opulent%2520dining%2520space%2520design%252C%2520inspirational%2520luxury%2520interior&width=400&height=500&seq=118&orientation=portrait",
      description: "Elevate your dining experience with sophisticated furnishings and elegant details."
    }
  ];

 return NextResponse.json(inspirationGallery);
}
