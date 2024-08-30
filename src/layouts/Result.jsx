import { CheckIcon } from '@heroicons/react/16/solid';
import SideBarDesktop from "./SideBar/SideBarDesktop";
import SideBarMobile from "./SideBar/SideBarMobile";

export default function Result({step}) {
  return (
    <div>
        {/* Bloc de gauche Mobile : Étapes */}
        <SideBarMobile  step={step} />
        <div className=" flex items-center justify-center p-6 sm:p-12 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full bg-white shadow-md rounded-lg">
                {/* Bloc de gauche Desktop : Étapes */}
                <SideBarDesktop step={step} />
                
                <div className="col-span-2 p-6 sm:p-12 flex justify-center items-center min-h-full">
                    <div className="pb-8 space-y-4 animate-fadeIn text-center">
                        <div className="flex flex-col items-center text-2xl text-sky-950 font-semibold">
                            <CheckIcon className="w-16 h-16 text-green-600 mb-2" />
                            Thank you!
                        </div>
                        <div className="block text-md font-normal text-gray-400">
                                Thanks for confirming your subscription!
                            <div>
                                We hope you have fun using our platform.
                            </div>
                            <div>
                                If you ever need support, please feel free to email us at support@loremgaming.com.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
