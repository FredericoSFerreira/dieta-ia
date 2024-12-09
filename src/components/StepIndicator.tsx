import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${
                  index < currentStep
                    ? 'bg-green-600 border-green-600 text-white'
                    : index === currentStep
                    ? 'border-green-600 text-green-600'
                    : 'border-gray-300 text-gray-300'
                }`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
        <div
          className="absolute top-5 h-0.5 w-full -z-0"
          style={{ backgroundColor: '#E5E7EB' }}
        >
          <div
            className="h-full bg-green-600 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}