import React, { useState } from 'react';
import PersonalInfo from "./layouts/PersonalInfo"
import SelectPlan from "./layouts/SelectPlan";
import PickAddOns from './layouts/PickAddOns';
import Summary from './layouts/Summary';
import Result from './layouts/Result';
import './assets/fonts.css';

function App() {

  const [step, setStep] = useState(1);
  const [recap, setRecap] = useState([]);

  const handleNextStep = (newItems) => {
    setStep(step + 1);
    
    const itemsToAdd = Array.isArray(newItems) ? newItems : [newItems];

    // Concatène les nouveaux éléments avec les précédents
    setRecap(prevRecap  => [...prevRecap , ...itemsToAdd]);
    
    // Afficher l'état actuel de recap dans la console
    console.log("Current Recap:", [...recap, ...itemsToAdd]);
  };

  return (
    <div className='min-h-screen bg-blue-50'>
      {step === 1 && <PersonalInfo  step={step} onNext={handleNextStep} />}
      {step === 2 && <SelectPlan  step={2} onNext={handleNextStep} />}
      {step === 3 && <PickAddOns  step={3} onNext={handleNextStep} />}
      {step === 4 && <Summary recap={recap} step={4} onNext={handleNextStep} />}
      {step === 5 && <Result  step={5} />}
    </div>
  )
}

export default App
