import { useState } from "react"


export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);
    function stepChange(i, e) {
        if (e) e.preventDefault();

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep, currentComponent: steps[currentStep], stepChange,
        firstStep: currentStep - 1 < 0 ? true : false,
        lastStep: currentStep + 1 === steps.length ? true : false
    }
}