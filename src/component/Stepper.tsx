import React, { useState } from 'react';

export interface Step {
  component: React.ReactNode;
  nextButtonText?: string;
}
// Stepper Component
export const Stepper = ({ steps }: { steps: Step[] }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      <div className="step-content">
        {steps[currentStep].component}
      </div>
      <div className="step-navigation">
        {currentStep > 0 && (
          <button onClick={goToPreviousStep} className='back'>
            Back
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={goToNextStep} className='next'>
            {steps[currentStep].nextButtonText || 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};
