'use client'
import React from 'react'
import { Separator } from '../ui/separator'
import Sofa from '@/icons/Sofa'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowUp, Facebook, Instagram } from 'lucide-react'
import AcceptCards from './AcceptCards'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                        <Sofa />
                        ModernHaus
                    </h3>
                    <p className="text-gray-400 mb-6">
                    Creating beautiful spaces with quality furniture since 2010. Our mission is to help you transform your house into a home.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <Facebook />
                        </Link>
                        <Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <Instagram />
                        </Link>
                        <Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                        <i className="fa-brands fa-pinterest text-lg"></i>
                        </Link>
                        <Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                        <i className="fa-brands fa-twitter text-lg"></i>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-6">Shopping</h3>
                    <ul className="space-y-3">
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Living Room</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bedroom</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Kitchen</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Dining</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Office</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Outdoor</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
                    <ul className="space-y-3">
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Shipping & Returns</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Store Locator</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Warranty</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Assembly Guides</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-6">About ModernHaus</h3>
                    <ul className="space-y-3">
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Story</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Press</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sustainability</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Design Blog</Link></li>
                        <li><Link href="#something" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Trade Program</Link></li>
                    </ul>
                </div>
            </div>
            <Separator className="bg-gray-700 mb-8 border-spacing-y-1.5" />
            <div className="w-full flex flex-col items-center space-y-1">
                <div>
                    <p className="text-gray-400 text-sm text-center">
                    &copy; {new Date().getFullYear()} ModernHaus. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4">
                    <span className="text-gray-400 text-sm w-full text-center md:w-auto md:text-left">
                        We Accept:
                    </span>
                    <AcceptCards />
                </div>
            </div>
        </div>
        <div className="mt-6 text-center">
            <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-lg transition-colors !rounded-button whitespace-nowrap cursor-pointer"
            >
            <ArrowUp />
            </Button>
        </div>
    </footer>
  )
}

export default Footer
