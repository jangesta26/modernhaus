import { Button } from '@/components/ui/button'
import React from 'react'

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
        <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://readdy.ai/api/search-image?query=elegant%2520dining%2520room%2520with%2520beautiful%2520table%2520setting%252C%2520stylish%2520chairs%252C%2520pendant%2520lighting%252C%2520large%2520windows%2520with%2520natural%2520light%252C%2520neutral%2520color%2520palette%2520with%2520subtle%2520accents%252C%2520professional%2520interior%2520photography%252C%2520high-end%2520dining%2520space&width=1440&height=500&seq=119&orientation=landscape)` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-lg text-white ml-8 md:ml-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Dining Collection</h1>
                <p className="text-xl mb-6">Create your perfect dining space</p>
                <p className="text-lg mb-8 bg-indigo-600/80 inline-block px-4 py-2 rounded-lg">Up to 50% off selected dining sets</p>
                <Button className="bg-white hover:bg-gray-100 text-indigo-600 hover:text-indigo-700 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                    Shop Now
                </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner
