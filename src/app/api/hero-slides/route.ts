
import { HeroSlides } from '@/types/heroSlides';
import { NextResponse } from 'next/server';

export async function GET() {
    const heroSlides: HeroSlides[] = [
    {
        image: "https://readdy.ai/api/search-image?query=modern%20elegant%20living%20room%20interior%20with%20stylish%20furniture%2C%20large%20windows%20with%20natural%20light%2C%20neutral%20color%20palette%20with%20accent%20pieces%2C%20minimalist%20design%20aesthetic%2C%20professional%20interior%20photography%2C%20high-end%20home%20decor&width=1200&height=600&seq=13&orientation=landscape",
        title: "Transform Your Space",
        subtitle: "Discover our new summer collection",
        cta: "Shop Now"
    },
    {
        image: "https://readdy.ai/api/search-image?query=contemporary%20bedroom%20interior%20with%20luxurious%20bedding%2C%20stylish%20furniture%2C%20ambient%20lighting%2C%20neutral%20tones%2C%20large%20windows%2C%20natural%20light%2C%20professional%20interior%20photography%2C%20high-end%20home%20decor%2C%20elegant%20and%20sophisticated%20design&width=1200&height=600&seq=14&orientation=landscape",
        title: "Sleep in Style",
        subtitle: "Bedroom essentials for perfect rest",
        cta: "Explore Bedroom"
    },
    {
        image: "https://readdy.ai/api/search-image?query=modern%20dining%20room%20with%20elegant%20table%20setting%2C%20stylish%20chairs%2C%20pendant%20lighting%2C%20minimalist%20design%2C%20neutral%20color%20palette%2C%20large%20windows%2C%20natural%20light%2C%20professional%20interior%20photography%2C%20high-end%20home%20decor%2C%20sophisticated%20atmosphere&width=1200&height=600&seq=15&orientation=landscape",
        title: "Dining Reimagined",
        subtitle: "Create memorable gatherings",
        cta: "View Dining Sets"
    }
    ];

return NextResponse.json(heroSlides);
}