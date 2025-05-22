'use client'
import DeliveryTruck from '@/icons/DeliveryTruck';
import Medal from '@/icons/Medal';
import RefreshArrowLeft from '@/icons/RefreshArrowLeft';
import Support from '@/icons/Support';
import { fetchValuePropositions } from '@/lib/api';
import { ValueProps } from '@/types/value-propositions';
import React, { useEffect, useState } from 'react'

const ValuePropositions = () => {
  const [valuePropositions, setValuePropositions] = useState<ValueProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchValuePropositions();
        setValuePropositions(data);
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
        case 'delivery':
            return <DeliveryTruck />;
        case 'return':
            return <RefreshArrowLeft />;
        case 'medal':
            return <Medal />;
        case 'headset':
            return <Support />;
        default:
            return null;
        }
    };


  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((prop, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 p-4.5">
                        {getIcon(prop.icon)}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                    <p className="text-gray-600">{prop.description}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
    )
}

export default ValuePropositions
