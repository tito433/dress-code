import React, { useState } from 'react';

// Stepper Component
const Stepper = ({ steps }: { steps: any[] }) => {
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
          <button onClick={goToPreviousStep}>
            {steps[currentStep].prevButtonText || 'Previous'}
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={goToNextStep}>
            {steps[currentStep].nextButtonText || 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
