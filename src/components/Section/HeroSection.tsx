'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from '../ui/button';
import { HeroSlides } from '@/types/heroSlides';
import { fetchHeroSlides } from '@/lib/api';

const HeroSection = () => {
  const [heroSlides, setHeroSlides] = useState<HeroSlides[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchHeroSlides();
        setHeroSlides(data);
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
    <section className="relative group">
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full"
        >
            {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
                <div
                className="relative w-full h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
                >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-12">
                    <div className="max-w-lg text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-xl mb-8">{slide.subtitle}</p>
                        <Button
                        variant="default"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
                        >
                        {slide.cta}
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default HeroSection;
