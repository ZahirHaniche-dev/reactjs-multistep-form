import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";

export default function FormAdds({ onNext }) {

    const methods = useForm();

    const adds = [
        { name: 'Online Service', price: 1, information: "Access to multiplayer games.", id: 1, checked: false},
        { name: 'Larger Storage', price: 2, information: "Extra 1TB of cloud save.", id: 2, checked: false },
        { name: 'Customizable Profile', price: 2, information: "Custom theme of your profile.", id: 3, checked: false },
    ];

    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const handleToggle = (id) => {
        setSelectedAddOns((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((addOnId) => addOnId !== id)
                : [...prevSelected, id]
        );
    };

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
                    <ul className="space-y-4">
                        {adds.map((addOn) => (
                            <li
                                key={addOn.id}
                                onClick={() => handleToggle(addOn.id)}
                                className={`border px-4 py-4 rounded-lg flex items-center cursor-pointer hover:bg-sky-50 justify-between ${
                                    selectedAddOns.includes(addOn.id) ? 'bg-sky-50' : ''
                                }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="checkbox"
                                        className="accent-sky-900 h-5 w-5"
                                        checked={selectedAddOns.includes(addOn.id)}
                                        onChange={() => handleToggle(addOn.id)}
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold">{addOn.name}</h3>
                                        <p className="text-gray-500 text-xs">
                                            {addOn.information}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sky-900 font-semibold text-sm">
                                    +$ {addOn.price}/mo
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-sky-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950"
                        >
                            Go Back
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
  )
}
