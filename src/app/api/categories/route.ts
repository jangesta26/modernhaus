import { CatergoryItems } from '@/types/categories';
import { NextResponse } from 'next/server';


export async function GET() {
  const data: CatergoryItems[] = [
    {
        name: "Living Room",
        image: "https://readdy.ai/api/search-image?query=modern%20minimalist%20living%20room%20with%20elegant%20furniture%2C%20neutral%20colors%2C%20large%20windows%2C%20natural%20light%2C%20clean%20lines%2C%20comfortable%20sofa%2C%20coffee%20table%2C%20decorative%20plants%2C%20stylish%20decor%2C%20high-end%20interior%20design%2C%20professional%20photography&width=400&height=400&seq=1&orientation=squarish",
        icon: "couch"
    },
    {
        name: "Bedroom",
        image: "https://readdy.ai/api/search-image?query=contemporary%20bedroom%20with%20stylish%20bed%20frame%2C%20nightstands%2C%20soft%20bedding%2C%20neutral%20color%20palette%2C%20ambient%20lighting%2C%20decorative%20pillows%2C%20minimal%20decor%2C%20large%20windows%2C%20natural%20light%2C%20professional%20interior%20photography&width=400&height=400&seq=2&orientation=squarish",
        icon: "bed"
    },
    {
        name: "Kitchen",
        image: "https://readdy.ai/api/search-image?query=modern%20kitchen%20with%20marble%20countertops%2C%20sleek%20cabinets%2C%20high-end%20appliances%2C%20pendant%20lighting%2C%20minimalist%20design%2C%20neutral%20color%20scheme%2C%20kitchen%20island%2C%20bar%20stools%2C%20professional%20interior%20photography%2C%20bright%20and%20airy%20space&width=400&height=400&seq=3&orientation=squarish",
        icon: "utinsils"
    },
    {
        name: "Dining",
        image: "https://readdy.ai/api/search-image?query=elegant%20dining%20room%20with%20wooden%20dining%20table%2C%20stylish%20chairs%2C%20pendant%20lighting%2C%20decorative%20centerpiece%2C%20neutral%20color%20palette%2C%20large%20windows%2C%20natural%20light%2C%20minimal%20decor%2C%20professional%20interior%20photography%2C%20sophisticated%20design&width=400&height=400&seq=4&orientation=squarish",
        icon: "chair"
    }
  ];

  return NextResponse.json(data);
}
