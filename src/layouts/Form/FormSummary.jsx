import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";

export default function FormSummary({onNext}) {
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
            <form>
                <ul className="space-y-4">
                    A FAIRE RECAPITULATIF DES ETAPES
                </ul>
                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-sky-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950"
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
  )
}
