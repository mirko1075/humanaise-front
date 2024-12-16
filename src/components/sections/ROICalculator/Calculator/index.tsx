import React from 'react';
import { Card } from '../../../ui/Card';
import { InputForm } from './InputForm';
import { Results } from './Results';
import { useROICalculator } from '../../../../hooks/useROICalculator';
import { ROIResults } from '../../../../types/roi';

interface CalculatorProps {
  onResultsCalculated: (results: ROIResults | null) => void;
}

export function Calculator({ onResultsCalculated }: CalculatorProps) {
  const { 
    inputs,
    results,
    handleInputChange,
    calculateROI,
    resetCalculator
  } = useROICalculator(onResultsCalculated);

  return (
    <Card className="bg-primary-800/50 border border-primary-700 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InputForm 
          inputs={inputs}
          onInputChange={handleInputChange}
          onCalculate={calculateROI}
          onReset={resetCalculator}
        />
        <Results results={results} />
      </div>
    </Card>
  );
}