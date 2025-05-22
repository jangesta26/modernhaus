import React from 'react'
import Visa from '@/icons/Visa'
import MasterCard from '@/icons/MasterCard'
import Amex from '@/icons/Amex'
import Paypal from '@/icons/Paypal'
import ApplePay from '@/icons/ApplePay'

const AcceptCards = () => {
  return (
    <>
    <div className="rounded-lg w-6 h-6 flex items-center justify-center">
        <Visa />
    </div>
    <div className="rounded-lg w-6 h-6 flex items-center justify-center">
        <MasterCard />
    </div>
    <div className="rounded-lg w-6 h-6 flex items-center justify-center">
        <Amex />
    </div>
    <div className="rounded-lg w-6 h-6 flex items-center justify-center">
        <Paypal />
    </div>
    <div className="rounded-lg w-6 h-6 flex items-center justify-center">
        <ApplePay />
    </div>  
    </>
  )
}

export default AcceptCards
