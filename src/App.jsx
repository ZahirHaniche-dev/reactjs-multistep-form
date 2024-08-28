import React, { useState } from 'react';
import PersonalInfo from "./layouts/PersonalInfo"
import SelectPlan from "./layouts/SelectPlan";
import './assets/fonts.css';

function App() {

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && <PersonalInfo onNext={handleNextStep} />}
      {step === 2 && <SelectPlan />}
    </>
  )
}

export default App
