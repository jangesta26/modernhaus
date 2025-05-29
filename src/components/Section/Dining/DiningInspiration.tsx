'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DiningInspirationProps } from '@/types/dining-products'
import Image from 'next/image'
import React from 'react'

const DiningInspiration = ({
    inspirationGallery
}:{
    inspirationGallery:DiningInspirationProps[]
}) => {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Design Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirationGallery.map((item) => (
            <Card key={item.id} className=" aspect-[4/5] overflow-hidden h-full p-0 mb-0 gap-0">
                <div className="overflow-hidden">
                <Image 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    width={300}
                    height={300}
                />
                </div>
                <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <Button className="w-full bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 !rounded-button whitespace-nowrap cursor-pointer">
                    Get The Look
                </Button>
                </div>
            </Card>
            ))}
        </div>
        </div>
    </section>
  )
}

export default DiningInspiration
