import { ValueProps } from '@/types/value-propositions';
import { NextResponse } from 'next/server';

export async function GET() {
    const featuredProducts: ValueProps[] = [
        {
            icon: "delivery",
            title: "Free Shipping",
            description: "On all orders over $75"
        },
        {
            icon: "return",
            title: "Easy Returns",
            description: "30-day return policy"
        },
        {
            icon: "medal",
            title: "Quality Guarantee",
            description: "5-year warranty on all products"
        },
        {
            icon: "headset",
            title: "24/7 Support",
            description: "Expert assistance always available"
        }
    ]
    return NextResponse.json(featuredProducts);
}