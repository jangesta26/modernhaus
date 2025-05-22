import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const UserMenuOpen = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-gray-100 py-2">
        <Link href="/signup" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <i className="fa-solid fa-user-plus w-5"></i>
            <span>Create Account</span>
        </Link>
         <Link href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <i className="fa-solid fa-user-circle w-5"></i>
            <span>My Profile</span>
        </Link>
        <Link href="/orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <i className="fa-solid fa-clock-rotate-left w-5"></i>
            <span>Order History</span>
        </Link>
        <Separator className="my-2" />
        <Link href="/signout" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
            <i className="fa-solid fa-right-from-bracket w-5"></i>
            <span>Sign Out</span>
        </Link>
    </div>
  )
}

export default UserMenuOpen
