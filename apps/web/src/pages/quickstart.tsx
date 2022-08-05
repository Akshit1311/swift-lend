import React, { useState } from "react";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";

type TActiveStep = 1 | 2;

const Quickstart = () => {
  const [activeStep, setActiveStep] = useState<TActiveStep>(1);

  const handleNext = () =>
    setActiveStep((prev: TActiveStep) => (prev + 1) as TActiveStep);

  const stepComps = {
    1: <Step1 handleNext={handleNext} />,
    2: <Step2 handleNext={handleNext} />,
    3: <Step3 />,
  };
  return (
    <div className="w-full h-full flex-1 px-24">{stepComps[activeStep]}</div>
  );
};

export default Quickstart;
