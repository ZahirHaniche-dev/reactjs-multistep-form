import { useForm, FormProvider } from "react-hook-form";
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/16/solid';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function FormPersoInfo({ onNext }) {
    
    const methods = useForm();

    const onSubmit = methods.handleSubmit(data => {
        console.log("Personal Info :", data);
        onNext(data); // Appeler onNext seulement si le formulaire est valide
    });


    return (
        <>
            <div className="col-span-2 p-6 sm:p-12">
                <div className="pb-8 ">
                    <div className="block text-2xl text-sky-950 font-semibold">
                    Personal Info
                    </div>
                    <div className="block text-md font-normal text-gray-400">
                    Please provide your name, email, and phone number.
                    </div>
                </div>
                <FormProvider {...methods}>
                    <form 
                    className="space-y-6"
                    onSubmit={onSubmit}
                    noValidate >
                        <Input 
                            label="Name"
                            type="text"
                            id="name"
                            placeholder="Haniche Zahir"
                            icone=<UserIcon className="size-3 text-sky-950" />
                        />
                        <Input 
                            label=" Email Adress"
                            type="email"
                            id="email"
                            placeholder="haniche.zahir@gmail.com"
                            icone=<EnvelopeIcon className="size-3 text-sky-950" />
                        />
                        <Input 
                            label=" Phone Number"
                            type="tel"
                            id="phone"
                            placeholder="+33 6 46 96 98 63"
                            icone=<PhoneIcon className="size-3 text-sky-950" />
                        />
                        
                        
                        <div className='flex justify-end'>
                            <Button bgColor="bg-sky-900" textColor="text-white" text="Next Step" />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}
