import { useForm, FormProvider } from "react-hook-form";
import React, { useState } from 'react';
import Button from '../../components/Button';

export default function FormSummary({recap, onNext}) {

    const methods = useForm();
    const [summary, setSummary] = useState(recap);

    const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
    };

    const chunkedSummary = chunkArray(summary, summary.length);
    console.log(chunkedSummary);

    // Get Selected Plan
    const selectedPlan = summary.find(item => item.name);
    console.log(selectedPlan);

    // Picked Add-Ons
    const pickedAddOns = summary.filter(item => item.information !== undefined);
    console.log(pickedAddOns);

    // Affiche le total des prix
    const totalPrice = summary.reduce((total, item) => {
        return total + (item.price || 0);
      }, 0);
      
    console.log(totalPrice); 

    const onSubmit = methods.handleSubmit(data => {
        onNext(data); // Appeler onNext seulement si le formulaire est valide
    });
    
  return (
    <div className="col-span-2 p-6 sm:p-12">
            <div className="pb-8">
                <div className="block text-2xl text-sky-950 font-semibold">
                    Finishing up
                </div>
                <div className="block text-md font-normal text-gray-400">
                    Double-check everything looks OK before confirming.
                </div>
            </div>
            <form onSubmit={onSubmit} className="animate-fadeIn" noValidate>
                <ul className="space-y-4 pb-6">
                    <li className="border px-4 py-4 rounded-lg flex items-center cursor-pointer hover:bg-sky-50 justify-between" >
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-sm font-semibold">Selected Plan </h3>
                            </div>
                        </div>
                        <span className="text-sky-900 font-normal text-sm">
                            {selectedPlan.name}  ({selectedPlan.monthly ? "Monthly" :"Yearly" }) 
                            <span className="text-sky-900 font-semibold text-sm"> +$ {selectedPlan.price}/mo </span>
                        </span>
                    </li>
                    <li className="border px-4 py-4 rounded-lg flex items-center cursor-pointer hover:bg-sky-50 justify-between" >
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-sm font-semibold">Picked Add-Ons </h3>
                            </div>
                        </div>
                        <ul className="text-sky-900 font-normal text-sm text-end space-y-2">
                            {pickedAddOns.map(picked => (
                                <li key={picked.id}>
                                    {picked.name}
                                    <span className="text-sky-900 font-semibold text-sm"> +$ {picked.price}/mo </span>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="border px-4 py-4 rounded-lg flex items-center cursor-pointer hover:bg-sky-50 justify-between" >
                        <div className="flex items-center space-x-4">
                            <div>
                                <h3 className="text-sm font-semibold">Total (per month) </h3>
                            </div>
                        </div>
                        <span className="text-sky-900 font-semibold text-sm">
                            +$ {totalPrice}/mo 
                        </span>
                    </li>
                </ul>
                <div className='flex justify-end'> 
                    <Button bgColor="bg-sky-900" textColor="text-white" text="Confirm" />
                </div>
            </form>

        </div>
  )
}
