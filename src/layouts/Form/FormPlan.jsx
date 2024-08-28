import React, { useState } from 'react';
import arcadeIcon from '../../images/icon-arcade.svg';
import advancedIcon from '../../images/icon-advanced.svg';
import proIcon from '../../images/icon-pro.svg';

const plans = [
    { name: 'Arcade', price: 9, icon: arcadeIcon, id: 1 },
    { name: 'Advanced', price: 12, icon: advancedIcon, id: 2 },
    { name: 'Pro', price: 15, icon: proIcon, id: 3 },
];

function SelectPlan() {
  const [billing, setBilling] = useState('Monthly');
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="col-span-2 p-6 sm:p-12">
        <div className="pb-8 ">
            <div className="block text-2xl text-sky-950 font-semibold">
            Personal Info
            </div>
            <div className="block text-md font-normal text-gray-400">
            Please provide your name, email, and phone number.
            </div>
        </div>
        <ul className="grid grid-cols-3 gap-4 justify-center ">
          {plans.map(plan => (
            <div key={plan.id} className="border px-2 py-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <li className=" items-center justify-center space-y-3">
                <img src={plan.icon} alt={`${plan.name} Icon`}  />
                <div>
                  <h3 className="text-sm font-semibold">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">${plan.price} per mo</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6">
          <span className="mr-2">Monthly</span>
          <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
      </label>
          <span className="ml-2">Yearly</span>
        </div>
        <div className="flex justify-between mt-6">
        <button type="submit"
            className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-sky-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950 ">
            Previous
        </button>
          <button type="submit"
            className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950 ">
            Next Step
        </button>
        </div>
    </div>
  );
}

export default SelectPlan;
