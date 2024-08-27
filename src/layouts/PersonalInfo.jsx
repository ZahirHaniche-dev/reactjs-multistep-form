import React, { useState } from 'react';

export default function PersonalInfo() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full bg-white shadow-md rounded-lg">

        {/* Bloc de gauche : Étapes */}
        <div className="col-span-1 bg-blue-700 pt-12 pl-6 rounded-l-lg flex flex-col ">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white font-bold">1</div>
              <div className="ml-4 text-white text-lg font-semibold">YOUR INFO</div>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white font-bold">2</div>
              <div className="ml-4 text-white text-lg font-semibold">SELECT PLAN</div>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white font-bold">3</div>
              <div className="ml-4 text-white text-lg font-semibold">ADD-ONS</div>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white font-bold">4</div>
              <div className="ml-4 text-white text-lg font-semibold">SUMMARY</div>
            </div>
          </div>
        </div>

        {/* Bloc de droite : Formulaire */}
        <div className="col-span-2 p-12">
          <div className="pb-8 ">
            <div className="block text-2xl font-medium text-gray-700">
              Personal Info
            </div>
            <div className="block text-lg font-medium text-gray-700">
              Please provide your name, email, and phone number.
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Vanessa Mint"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vanessamint@"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 234 567 890"
                className={`mt-1 block w-full px-3 py-2 border ${
                  phone ? 'border-gray-300' : 'border-red-500'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs`}
              />
              {!phone && (
                <p className="mt-2 text-xs text-red-600">This field is required</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}
