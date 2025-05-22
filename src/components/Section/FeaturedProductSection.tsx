'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { fetchFeaturedProducts } from '@/lib/api'
import { FeaturedProducts } from '@/types/featured-products'
import RatingStar from '@/icons/RatingStar'
import Image from 'next/image'

const FeaturedProductSection = () => {
    const [featuredProducts, setFeaturedProducts] = useState<FeaturedProducts[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const loadSlides = async () => {
        try {
        const data = await fetchFeaturedProducts();
        setFeaturedProducts(data);
        } catch (err) {
        console.error('Failed to fetch hero slides', err);
        setError('Failed to load slides');
        } finally {
        setIsLoading(false);
        }
    };

    loadSlides();
    }, []);

    if (isLoading) {
    return <div className="h-[600px] flex items-center justify-center text-gray-600">Loading...</div>;
    }

    if (error) {
    return <div className="h-[600px] flex items-center justify-center text-red-600">{error}</div>;
    }

  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-col justify-between items-center mb-12 space-y-0.5">
                <h2 className="text-3xl font-bold">Featured Products</h2>
                <Tabs defaultValue="all" className="w-full md:w-auto mt-6 md:mt-0">
                    <TabsList className="bg-gray-100">
                        <TabsTrigger value="all" className="!rounded-button whitespace-nowrap cursor-pointer">All</TabsTrigger>
                        <TabsTrigger value="living-room" className="!rounded-button whitespace-nowrap cursor-pointer">Living Room</TabsTrigger>
                        <TabsTrigger value="bedroom" className="!rounded-button whitespace-nowrap cursor-pointer">Bedroom</TabsTrigger>
                        <TabsTrigger value="dining" className="!rounded-button whitespace-nowrap cursor-pointer">Dining</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg p-0 mb-0">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            25vw"
                    priority={false} // You can make first images priority if you want
                    />
                    {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white">New</Badge>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Button className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Quick View
                        </Button>
                    </div>
                </div>
            <div className="p-4 pt-0">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <div className="flex items-center">
                        <RatingStar />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fa-solid fa-cart-plus mr-2"></i>
                    Add to Cart
                    </Button>
                </div>
            </div>
            </Card>
            ))}
        </div>
        <div className="mt-12 text-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 !rounded-button whitespace-nowrap cursor-pointer">
            View All Products
            </Button>
        </div>
        </div>
    </section>
  )
}

export default FeaturedProductSection
