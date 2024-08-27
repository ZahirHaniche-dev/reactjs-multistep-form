import React, { useState } from 'react';
import bgSideBar from '../images/bg-sidebar-desktop.svg';
import { EnvelopeIcon, PhoneIcon, UserIcon } from '../../node_modules/@heroicons/react/16/solid'


export default function PersonalInfo() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full bg-white shadow-md rounded-lg">

        {/* Bloc de gauche : Étapes */}
        <div 
          className="col-span-1 bg-blue-700 pt-12 pl-6 rounded-l-lg flex flex-col bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgSideBar})` }}
        >
          <ul className="space-y-8">
            <li className="flex items-center gap-1">
                <span className="h-8 w-8 flex items-center justify-center bg-sky-200 border rounded-full text-sky-950 text-sm font-bold">1</span>
                <span className="ml-4 flex flex-col justify-center space-y-0">
                  <div className="text-gray-400 text-sm font-normal uppercase">Step 1</div>
                  <div className="text-gray-300 text-sm uppercase mt-1 font-semibold">Personal Info</div>
                </span>
            </li>
            <li className="flex items-center gap-1">
              <span className="h-8 w-8 flex items-center justify-center bg-transparent border rounded-full text-white text-sm font-bold">2</span>
              <span className="ml-4 flex flex-col justify-center space-y-0">
                <div className="text-gray-400 text-sm font-normal uppercase">Step 2</div>
                <div className="text-gray-300 text-sm font-semibold uppercase mt-1">Select Plan</div>
              </span>
            </li>
            <li className="flex items-center gap-1">
              <span className="h-8 w-8 flex items-center justify-center bg-transparent border rounded-full text-white text-sm font-bold">3</span>
              <span className="ml-4 flex flex-col justify-center space-y-0">
                <div className="text-gray-400 text-sm font-normal uppercase">Step 3</div>
                <div className="text-gray-300 text-sm font-semibold uppercase mt-1">Pick Add-Ons</div>
              </span>
            </li>
            <li className="flex items-center gap-1">
              <span className="h-8 w-8 flex items-center justify-center bg-transparent border rounded-full text-white text-sm font-bold">4</span>
              <span className="ml-4 flex flex-col justify-center space-y-0">
                <div className="text-gray-400 text-sm font-normal uppercase">Step 4</div>
                <div className="text-gray-300 text-sm font-semibold uppercase mt-1">Summary</div>
              </span>
            </li>
          </ul>
        </div>

        {/* Bloc de droite : Formulaire */}
        <div className="col-span-2 p-12">
          <div className="pb-8 ">
            <div className="block text-2xl text-sky-950 font-semibold">
              Personal Info
            </div>
            <div className="block text-md font-normal text-gray-400">
              Please provide your name, email, and phone number.
            </div>
          </div>
          
          <form className="space-y-5">
            <div>
              <div className='flex items-center space-x-1 '>
                <label>
                    <UserIcon class="size-3 text-sky-950" />
                </label>
                <label htmlFor="name" className="block text-xs font-medium text-sky-950">
                  Name : <span className='text-red-700'>*</span>
                </label>
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Haniche Zahir"
                className="mt-1 block w-full px-4 py-3 border text-3xl text-sky-950 font-semibold border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 sm:text-xs"
              />
            </div>
            <div>
              <div className='flex items-center space-x-1 '>
                <label>
                    <EnvelopeIcon class="size-3 text-sky-950" />
                </label>
                <label htmlFor="email" className="block text-xs font-medium text-sky-950">
                  Email Adress : <span className='text-red-700'>*</span>
                </label>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="haniche.zahir@gmail.com"
                className="mt-1 block w-full px-4 py-3 border text-3xl text-sky-950 font-semibold border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 sm:text-xs"
              />
            </div>
            <div>
              <div className='flex items-center space-x-1 '>
                <label>
                    <PhoneIcon class="size-3 text-sky-950" />
                </label>
                <label htmlFor="phone" className="block text-xs font-medium text-sky-950">
                  Phone Number : <span className='text-red-700'>*</span>
                </label>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+33 6 46 96 98 63"
                className={`mt-1 block w-full px-4 py-3 border  text-sky-950 font-semibold ${
                  phone ? 'border-gray-300' : 'border-red-700'
                } rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 sm:text-xs`}
              />
              {!phone && (
                <p className="mt-2 text-xs text-red-700 font-semibold">This field is required</p>
              )}
            </div>
            <div className='flex justify-end'>
              <button
                type="submit"
                className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950 "
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
