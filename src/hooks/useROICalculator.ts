import { useState, useCallback } from 'react';
import { ROIInputs, ROIResults } from '../types/roi';

const DEFAULT_INPUTS: ROIInputs = {
  currentCost: 0,
  employeeCount: 1,
  hoursPerWeek: 40,
  hourlyRate: 0,
  automationPercentage: 0,
};

export function useROICalculator(onResultsCalculated?: (results: ROIResults | null) => void) {
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_INPUTS);
  const [results, setResults] = useState<ROIResults | null>(null);

  const handleInputChange = useCallback((field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: isNaN(value) ? 0 : value
    }));
  }, []);

  const calculateROI = useCallback(() => {
    const {
      currentCost,
      employeeCount,
      hoursPerWeek,
      hourlyRate,
      automationPercentage
    } = inputs;

    // Validate inputs
    if (isNaN(currentCost) || isNaN(employeeCount) || isNaN(hoursPerWeek) || 
        isNaN(hourlyRate) || isNaN(automationPercentage)) {
      return;
    }

    // Calculate annual labor cost
    const annualLaborCost = employeeCount * hoursPerWeek * hourlyRate * 52;

    // Calculate potential savings based on automation percentage
    const automationSavings = (annualLaborCost * automationPercentage) / 100;

    // Calculate hours freed annually
    const hoursFreedAnnually = (hoursPerWeek * 52 * automationPercentage) / 100 * employeeCount;

    // Calculate ROI
    const roi = currentCost > 0 
      ? ((automationSavings - currentCost) / currentCost) * 100 
      : 0;

    const newResults = {
      annualSavings: automationSavings,
      hoursFreedAnnually,
      roi: Math.max(0, roi)
    };

    setResults(newResults);
    onResultsCalculated?.(newResults);
  }, [inputs, onResultsCalculated]);

  const resetCalculator = useCallback(() => {
    setInputs(DEFAULT_INPUTS);
    setResults(null);
    onResultsCalculated?.(null);
  }, [onResultsCalculated]);

  return {
    inputs,
    results,
    handleInputChange,
    calculateROI,
    resetCalculator
  };
}