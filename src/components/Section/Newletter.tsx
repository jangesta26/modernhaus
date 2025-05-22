'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Newletter = () => {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy submit logic — replace with your real API call if needed
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                <p className="text-gray-600 mb-8">Subscribe to get special offers, free giveaways, and design inspiration.</p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow border-gray-300 focus-visible:ring-indigo-600 focus-visible:border-indigo-600 focus-visible:ring-[1px] rounded-lg text-sm"
                    required
                    />
                    <Button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer"
                    >
                    Subscribe
                    </Button>
                </form>
                {subscribed && (
                <p className="mt-4 text-green-600">Thank you for subscribing!</p>
                )}
                <p className="mt-4 text-sm text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Newletter
