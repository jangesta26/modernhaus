'use client'
import React, { useEffect, useState } from 'react'
import BreacrumbComponent from '@/components/Breadcrumb/BreacrumbComponent'
import FilterAndSort from '@/components/Section/Dining/FilterAndSort'
import HeroBanner from '@/components/Section/Dining/HeroBanner'
import { fetchDiningCollections, fetchDiningInspiration, fetchDiningProducts } from '@/lib/api'
import { DiningCollectionProps, DiningInspirationProps, DiningProductsProps } from '@/types/dining-products'
import SpecialCollections from '@/components/Section/Dining/SpecialCollections'
import DiningInspiration from '@/components/Section/Dining/DiningInspiration'
import PromotionBanner from '@/components/Banner/PromotionBanner'
import Newsletter from '@/components/Section/Newsletter'

const DiningPage = () => {

  const [diningProducts, setDiningProfucts] = useState<DiningProductsProps[]>([]);
  const [diningCollection, setDiningCollection] = useState<DiningCollectionProps[]>([]);
  const [diningInspirationData, setDiningInspirationData] = useState<DiningInspirationProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchDiningProducts();
        const dataDiningCollection = await fetchDiningCollections();
        const dataDiningInspiration = await fetchDiningInspiration();
        setDiningProfucts(data);
        setDiningCollection(dataDiningCollection)
        setDiningInspirationData(dataDiningInspiration)
      } catch (err) {
        console.error('Failed to fetch ', err);
        setError('Failed to load');
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
    <main>
      <BreacrumbComponent
      breadcrumbItems = { [

        { label: 'Home', pathname: '/' },
        { label: 'Shop by Category', pathname: '/categories' },
        { label: 'Dining Collection'},
      
      ]}
      />
      <HeroBanner />
      <FilterAndSort 
        diningProducts = {diningProducts}
      />
      <SpecialCollections 
      diningCollections={diningCollection}
      />
      <DiningInspiration 
      inspirationGallery={diningInspirationData}
      />
      <PromotionBanner 
        title = "Limited Time Offer!"
        description = "Get an extra 10% off when you buy a complete dining set."
        label = "Shop Dining Sets"
      />
      <Newsletter />
    </main>
  )
}

export default DiningPage
