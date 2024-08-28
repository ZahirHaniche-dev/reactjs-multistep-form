import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";

export default function FormAdds({ onNext }) {

    const methods = useForm();

    const adds = [
        { name: 'Online Service', price: 1, information: "Access to multiplayer games.", id: 1 },
        { name: 'Larger Storage', price: 2, information: "Extra 1TB of cloud save.", id: 2 },
        { name: 'Customizable Profile', price: 2, information: "Custom theme of your profile.", id: 3 },
    ];

  return (
    <div className="col-span-2 p-6 sm:p-12">
            <div className="pb-8">
                <div className="block text-2xl text-sky-950 font-semibold">
                    Pick Add-Ons
                </div>
                <div className="block text-md font-normal text-gray-400">
                    Enhance your gaming experience with add-ons.
                </div>
            </div>
            <FormProvider {...methods}>
                <form>
                    <ul className="grid grid-cols-1 gap-4 justify-center">
                    {
                        adds.map(addOns => (
                            <div key={addOns.id}>
                                <li><div>{addOns.name} {addOns.information} {addOns.price}</div></li>
                            </div>
                        ))
                    }
                    </ul>
                    <div className="flex justify-between mt-6">
                        <button type="button" 
                            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-sky-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950">
                            Previous
                        </button>
                        <button type="submit" 
                            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950">
                            Next Step
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
  )
}
