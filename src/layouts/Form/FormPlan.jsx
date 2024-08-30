import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import arcadeIcon from '../../images/icon-arcade.svg';
import advancedIcon from '../../images/icon-advanced.svg';
import proIcon from '../../images/icon-pro.svg';
import Button from '../../components/Button';

export default function FormPlan({ onNext }) {
    const [isChecked, setIsChecked] = useState(false);
    const [valuePlan, setValuePlan] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    
    const plans = [
        { name: 'Arcade', price: 9, icon: arcadeIcon, id: 1, monthly: isChecked },
        { name: 'Advanced', price: 12, icon: advancedIcon, id: 2, monthly: isChecked  },
        { name: 'Pro', price: 15, icon: proIcon, id: 3, monthly: isChecked  },
    ];

    

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const methods = useForm();
    const { handleSubmit } = methods;

    function valuePlanClick(plan) {
        setValuePlan(plan);
        setErrorMessage(''); 
    }

    const onSubmit = handleSubmit(data => {
        if (valuePlan) {
           // console.log("Selected Plan:", valuePlan);
            onNext(valuePlan); 
        } else {
            setErrorMessage('Please select a plan.');
        }
    });

    return (
        <div className="col-span-2 p-6 sm:p-12">
            <div className="pb-8">
                <div className="block text-2xl text-sky-950 font-semibold">
                    Select Your Plan
                </div>
                <div className="block text-md font-normal text-gray-400">
                    Please choose your preferred plan and billing frequency.
                </div>
                {errorMessage && <p className="flex items-center gap-1 px-2 py-1 mt-6 font-semibold w-[50%] justify-center
                    text-red-700 bg-red-100 rounded-md text-xs">{errorMessage}</p>}
            </div>
            <FormProvider {...methods}>
                <form onSubmit={onSubmit} className='animate-fadeIn' noValidate>
                    <ul className="grid grid-cols-3 gap-4 justify-center">
                        {plans.map(plan => (
                            <div key={plan.id} 
                                 onClick={() => valuePlanClick(plan)} 
                                 className={`border px-2 py-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-50 ${
                                    valuePlan?.id === plan.id ? 'bg-sky-100 border-sky-500' : 'bg-white'
                                 }`}>
                                <li className="items-center justify-center space-y-3">
                                    <img src={plan.icon} alt={`${plan.name} Icon`} />
                                    <div>
                                        <h3 className="text-sm font-semibold">{plan.name}</h3>
                                        <p className="text-gray-500 text-sm">
                                            ${isChecked ? plan.price : plan.price * 10}/{isChecked ? 'month' : 'year'}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {isChecked ? "" : "2 months free"}
                                        </p>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <div className="flex items-center justify-center mt-6">
                        <span className="mr-2 text-sm">
                            {!isChecked ? <span className='font-semibold'>Yearly</span>  : "Yearly"}
                        </span>
                        <label className="flex cursor-pointer select-none items-center">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="sr-only"
                                />
                                <div className="block h-6 w-12 rounded-full bg-sky-950"></div>
                                <div
                                    className={`dot absolute top-1 right-0.05 h-4 w-4 rounded-full bg-white transition transform ${
                                    isChecked ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                ></div>
                            </div>
                        </label>
                        <span className="ml-2 text-sm font-normal">
                            {isChecked ? <span className='font-semibold'>Monthly</span> : "Monthly"}
                        </span>
                    </div>
                
                    <div className="flex justify-between mt-6">
                        <Button bgColor="bg-gray-200" textColor="text-sky-900" text="Previous" />
                        <Button bgColor="bg-sky-900" textColor="text-white" text="Next Step" />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
