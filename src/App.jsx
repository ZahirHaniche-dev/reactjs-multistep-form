import React, { useState } from 'react';
import PersonalInfo from "./layouts/PersonalInfo"
import SelectPlan from "./layouts/SelectPlan";
import PickAddOns from './layouts/PickAddOns';
import Summary from './layouts/Summary';
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
    <>
      {step === 1 && <PersonalInfo onNext={handleNextStep} />}
      {step === 2 && <SelectPlan   step={1} onNext={handleNextStep}/>}
      {step === 3 && <PickAddOns   step={2} onNext={handleNextStep}/>}
      {step === 4 && <Summary   recap={recap} step={3} onNext={handleNextStep}/>}
    </>
  )
}

export default App
