import React from 'react';
import { ROIInputs, ROIResults } from '../../../../types/roi';
import { InputForm } from './InputForm';
import { Results } from './Results';

interface CalculatorProps {
  inputs: ROIInputs;
  errors: Record<keyof ROIInputs, string | null>;
  onInputChange: (field: keyof ROIInputs, value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
  isValid: boolean;
  results: ROIResults | null;
}

export function Calculator({
  inputs,
  errors,
  onInputChange,
  onCalculate,
  onReset,
  isValid,
  results
}: CalculatorProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <InputForm 
        inputs={inputs}
        errors={errors}
        onInputChange={onInputChange}
        onCalculate={onCalculate}
        onReset={onReset}
        isValid={isValid}
      />
      <Results results={results} />
    </div>
  );
}