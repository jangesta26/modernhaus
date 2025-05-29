'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import RatingStar from '@/icons/RatingStar';
import { DiningProductsProps } from '@/types/dining-products';
import { ChevronDown, Filter, Heart } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const FilterAndSort = (
    {
        diningProducts=[]  
    } : {
        diningProducts:DiningProductsProps[]
    }
) => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 5000]);
  const [sortOption, setSortOption] = useState("featured");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const handleStyleChange = (style: string) => {
    setSelectedStyles(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style) 
        : [...prev, style]
    );
  };

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material) 
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setPriceRange([100, 5000]);
    setSelectedStyles([]);
    setSelectedMaterials([]);
    setSortOption("featured");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const filterButton = document.getElementById('filterButton');
      const filterPanel = document.getElementById('filterPanel');
      
      if (isFilterOpen && filterButton && filterPanel && 
          !filterButton.contains(event.target as Node) && 
          !filterPanel.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFilterOpen]);

   const styleOptions = ["Modern", "Traditional", "Industrial", "Mid-Century", "Scandinavian", "Farmhouse", "Contemporary"];
  const materialOptions = ["Wood", "Glass", "Marble", "Metal", "Fabric", "Leather", "Engineered Wood"];

  const filteredProducts = diningProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(product.style);
    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    return matchesPrice && matchesStyle && matchesMaterial;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return 0;
    }
  });


  return (
    <>
    <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
            <h2 className="text-xl font-bold mr-4">Dining Furniture</h2>
            <span className="text-gray-500 text-sm">{filteredProducts.length} products</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
                <Button 
                id="filterButton"
                variant='outline'
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                >
                <Filter className='h-4'/>
                Filters
                {(selectedStyles.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 100 || priceRange[1] < 5000) && (
                    <span className="ml-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {selectedStyles.length + selectedMaterials.length + (priceRange[0] > 100 || priceRange[1] < 5000 ? 1 : 0)}
                    </span>
                )}
                </Button>
                
                {isFilterOpen && (
                <div id="filterPanel" className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-40 border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <Button 
                        variant='outline'
                        onClick={clearFilters}
                        className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                        Clear All
                    </Button>
                    </div>
                    
                    <div className="mb-6">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="px-2">
                        <Slider
                        defaultValue={[100, 5000]}
                        min={100}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-4"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                        </div>
                    </div>
                    </div>
                    
                    <div className="mb-6">
                    <h4 className="font-medium mb-3">Style</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                        {styleOptions.map((style) => (
                        <div key={style} className="flex items-center">
                            <Checkbox 
                            id={`style-${style}`} 
                            checked={selectedStyles.includes(style)}
                            onCheckedChange={() => handleStyleChange(style)}
                            className="mr-2"
                            />
                            <Label htmlFor={`style-${style}`} className="text-sm cursor-pointer">
                            {style}
                            </Label>
                        </div>
                        ))}
                    </div>
                    </div>
                    
                    <div className="mb-4">
                    <h4 className="font-medium mb-3">Material</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                        {materialOptions.map((material) => (
                        <div key={material} className="flex items-center">
                            <Checkbox 
                            id={`material-${material}`} 
                            checked={selectedMaterials.includes(material)}
                            onCheckedChange={() => handleMaterialChange(material)}
                            className="mr-2"
                            />
                            <Label htmlFor={`material-${material}`} className="text-sm cursor-pointer">
                            {material}
                            </Label>
                        </div>
                        ))}
                    </div>
                    </div>
                    
                    <Button 
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                    Apply Filters
                    </Button>
                </div>
                )}
            </div>
            
            <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden !rounded-button">
                <span className="px-3 py-2 text-gray-500 text-sm border-r border-gray-300">Sort By</span>
                <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-transparent border-none px-3 py-2 pr-8 text-gray-700 text-sm focus:outline-none cursor-pointer"
                >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                    <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    {(selectedStyles.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 100 || priceRange[1] < 5000) && (
        <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            
            {priceRange[0] > 100 || priceRange[1] < 5000 ? (
                <Badge variant="outline" className="flex items-center gap-1 !rounded-button whitespace-nowrap">
                ${priceRange[0]} - ${priceRange[1]}
                <button 
                    onClick={() => setPriceRange([100, 5000])}
                    className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    <i className="fa-solid fa-times text-xs"></i>
                </button>
                </Badge>
            ) : null}
            
            {selectedStyles.map(style => (
                <Badge key={`style-${style}`} variant="outline" className="flex items-center gap-1 !rounded-button whitespace-nowrap">
                {style}
                <button 
                    onClick={() => handleStyleChange(style)}
                    className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    <i className="fa-solid fa-times text-xs"></i>
                </button>
                </Badge>
            ))}
            
            {selectedMaterials.map(material => (
                <Badge key={`material-${material}`} variant="outline" className="flex items-center gap-1 !rounded-button whitespace-nowrap">
                {material}
                <button 
                    onClick={() => handleMaterialChange(material)}
                    className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    <i className="fa-solid fa-times text-xs"></i>
                </button>
                </Badge>
            ))}
            
            <button 
                onClick={clearFilters}
                className="text-sm text-indigo-600 hover:text-indigo-800 ml-auto cursor-pointer"
            >
                Clear All
            </button>
            </div>
        </div>
        </section>
    )}
    <section className="py-12">
        <div className="container mx-auto px-4">
        {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg p-0 mb-0 gap-0">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={300}
                    />
                    {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white">New</Badge>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                        <Button className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Quick View
                        </Button>
                        <Button className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg p-0 flex items-center justify-center !rounded-button cursor-pointer">
                            <Heart />
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <div className="flex items-center">
                        <RatingStar />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs font-normal text-gray-600 !rounded-button whitespace-nowrap">
                        {product.style}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-normal text-gray-600 !rounded-button whitespace-nowrap">
                        {product.material}
                    </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fa-solid fa-cart-plus mr-2"></i>
                        Add to Cart
                    </Button>
                    </div>
                </div>
                </Card>
            ))}
            </div>
        ) : (
            <div className="text-center py-16">
            <i className="fa-solid fa-search text-4xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or browse our collections below.</p>
            <Button 
                onClick={clearFilters}
                className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer"
            >
                Clear All Filters
            </Button>
            </div>
        )}
        
        {sortedProducts.length > 0 && (
            <div className="mt-12 text-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 !rounded-button whitespace-nowrap cursor-pointer">
                Load More Products
            </Button>
            </div>
        )}
        </div>
    </section>
    </>
  )
}

export default FilterAndSort
