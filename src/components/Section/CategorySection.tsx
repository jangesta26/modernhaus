'use client'
import Bed from '@/icons/Bed';
import Chair from '@/icons/Chair';
import Couch from '@/icons/Couch';
import Utinsils from '@/icons/Utinsils';
import { fetchCategoryItems } from '@/lib/api';
import { CatergoryItems } from '@/types/categories';
import Image from 'next/image';
import { useEffect, useState } from 'react'

const CategorySection = () => {

    const [category, setCategory] = useState<CatergoryItems[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSlides = async () => {
        try {
            const data = await fetchCategoryItems();
            setCategory(data);
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


    const getIcon = (icon: string) => {
        switch (icon) {
        case 'utinsils':
            return <Utinsils />;
        case 'couch':
            return <Couch />;
        case 'bed':
            return <Bed />;
        case 'chair':
            return <Chair />;
        default:
            return null;
        }
    };


  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="aspect-square overflow-hidden">
                    <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            25vw"
                    priority={index === 0}
                    />
                </div>
                <a href={
                    item.name === "Living Room" ? "#something" :
                    item.name === "Bedroom" ? "#something" :
                    item.name === "Kitchen" ? "#something" :
                    item.name === "Dining" ? "/dining" : "#something"}
                    data-readdy="true" className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-6">
                    <div className="text-white text-3xl mb-3">{getIcon(item.icon)}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Collection
                    </span>
                </a>
            </div>
        ))}
            </div>
        </div>
    </section>
  )
}

export default CategorySection
