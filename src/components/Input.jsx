import {useFormContext } from "react-hook-form"
import { findInputError } from  '../utils/findInputError';
import { isFormInvalid } from  '../utils/isFormInvalid';
import { motion, AnimatePresence } from "framer-motion"

export default function Input({ name, label, type, id, placeholder, icone }) {

    const {
        register,
        formState: { errors },
      } = useFormContext()
    
      const inputError = findInputError(errors, label)
      const isInvalid = isFormInvalid(inputError)

    return (
        <div>
            <div className='flex items-center space-x-1 '>
                <label>
                    {icone}
                </label>
                <label htmlFor="name" className="block text-xs font-medium text-sky-950 pr-2">
                {label} : <span className='text-red-700'>*</span>
                </label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                        message={inputError.error.message}
                        key={inputError.error.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required
                className="mt-1 block w-full px-4 py-3 border  text-sky-950 font-semibold border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-sky-950 focus:border-sky-950 text-xs"
                {...register(label, {
                    required: {
                        value: true,
                        message: 'This field is required.',
                    },
                })}
            />
        </div>
    )
}

const InputError = ({ message }) => {
    return (
      <motion.p
        className="flex items-center gap-1 px-2 font-semibold
         text-red-700 bg-red-100 rounded-md text-xs"
        {...framer_error}
      >
        {message}
      </motion.p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }