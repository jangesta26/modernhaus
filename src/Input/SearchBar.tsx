import { Input } from '@/components/ui/input'
import { ScanSearch } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="relative hidden md:block">
        <div className='flex items-center'>
            <Input
            type="text"
            placeholder="Search..."
            className="w-64 pr-10 focus-visible:ring-indigo-600 focus-visible:border-indigo-600 focus-visible:ring-[1px] rounded-full text-sm "
            />
            <button 
            className='
             hover:cursor-pointer flex items-center absolute right-3 top-1/2 transform -translate-y-1/2
            text-gray-400 hover:text-indigo-600
            '>
                <ScanSearch className='h-6 w-6'/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar
