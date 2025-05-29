'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { DiningCollectionProps } from '@/types/dining-products';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';



const SpecialCollections = ({
diningCollections    
}:{
diningCollections:DiningCollectionProps[]
}) => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Dining Sets</h2>
        <div className="relative">
            <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="pb-12"
            >
            {diningCollections.map((collection) => (
                <SwiperSlide key={collection.id}>
                <Card className="overflow-hidden h-full p-0 mb-0 gap-0">
                    <div className="aspect-[5/3] overflow-hidden">
                    <Image 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        width={300}
                        height={300}
                    />
                    </div>
                    <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2">{collection.name}</h3>
                    <p className="text-gray-500 mb-4">Starting at ${collection.startingPrice}</p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Shop Collection
                    </Button>
                    </div>
                </Card>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </div>
    </section>
  )
}

export default SpecialCollections
