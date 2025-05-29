import React from 'react'
import { Button } from '../ui/button'

const PromotionBanner = ({
  title,
  description,
  label
}:{
  title: string,
  description:string,
  label:string
}) => {
  return (
    <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-y-4">
                <div className="mb-8 md:mb-0 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                <p className="text-xl opacity-90">{description}</p>
                </div>
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                    {label}
                </Button>
            </div>
        </div>
    </section>
  )
}

export default PromotionBanner
