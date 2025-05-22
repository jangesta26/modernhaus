import { ArrowRight, Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SocialMedia = () => {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Follow Us on Instagram</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm">
                Get inspired by our latest designs and customer showcases. Tag us with #ModernHaus
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square overflow-hidden relative group cursor-pointer rounded-lg">
                    <Image
                        src={`https://readdy.ai/api/search-image?query=modern%20interior%20design%20with%20stylish%20furniture%2C%20elegant%20home%20decor%2C%20contemporary%20living%20space%2C%20professional%20interior%20photography%2C%20high-end%20furniture%20styling%2C%20neutral%20color%20palette%2C%20lifestyle%20photography&width=300&height=300&seq=${item + 20}&orientation=squarish`}
                        alt="Instagram post"
                        fill
                        sizes="(max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        priority={false}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Instagram className='text-white text-2xl'/>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center cursor-pointer">
                    View More on Instagram
                    <ArrowRight className='ml-2'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default SocialMedia
