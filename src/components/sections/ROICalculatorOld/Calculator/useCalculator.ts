import { useState, useCallback, useMemo, useEffect } from 'react';
import { ROIInputs, ROIResults } from '../../../../types/roi';
import { validateField, isFormValid } from './validation';

const DEFAULT_INPUTS: ROIInputs = {
  currentCost: 50000,      // $50,000 implementation cost
  employeeCount: 10,       // 10 employees
  hoursPerWeek: 40,       // 40 hours per week (standard work week)
  hourlyRate: 35,         // $35 per hour average rate
  automationPercentage: 30 // 30% automation expected
};

export function useCalculator(onResultsCalculated?: (results: ROIResults | null) => void) {
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_INPUTS);
  const [errors, setErrors] = useState<Record<keyof ROIInputs, string | null>>({
    currentCost: null,
    employeeCount: null,
    hoursPerWeek: null,
    hourlyRate: null,
    automationPercentage: null,
  });

  const handleInputChange = useCallback((field: keyof ROIInputs, value: number) => {
    setInputs(prev => {
      const newInputs = { ...prev, [field]: value };
      setErrors(prev => ({
        ...prev,
        [field]: validateField(field, value)
      }));
      return newInputs;
    });
  }, []);

  const calculateROI = useCallback(() => {
    if (!isFormValid(inputs)) {
      return;
    }

    const {
      currentCost,
      employeeCount,
      hoursPerWeek,
      hourlyRate,
      automationPercentage
    } = inputs;

    const annualLaborCost = employeeCount * hoursPerWeek * hourlyRate * 52;
    const automationSavings = (annualLaborCost * automationPercentage) / 100;
    const hoursFreedAnnually = (hoursPerWeek * 52 * automationPercentage) / 100 * employeeCount;
    const roi = currentCost > 0 
      ? ((automationSavings - currentCost) / currentCost) * 100 
      : 0;

    const results = {
      annualSavings: automationSavings,
      hoursFreedAnnually,
      roi: Math.max(0, roi)
    };

    onResultsCalculated?.(results);
  }, [inputs, onResultsCalculated]);

  // Calculate initial results on mount
  useEffect(() => {
    calculateROI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const resetCalculator = useCallback(() => {
    setInputs(DEFAULT_INPUTS);
    setErrors({
      currentCost: null,
      employeeCount: null,
      hoursPerWeek: null,
      hourlyRate: null,
      automationPercentage: null,
    });
    onResultsCalculated?.(null);
  }, [onResultsCalculated]);

  const isValid = useMemo(() => isFormValid(inputs), [inputs]);
  const isComplete = useMemo(() => 
    Object.values(inputs).every(value => value > 0) &&
    inputs.automationPercentage <= 100 &&
    inputs.hoursPerWeek <= 168
  , [inputs]);

  return {
    inputs,
    errors,
    handleInputChange,
    calculateROI,
    resetCalculator,
    isValid,
    isComplete
  };
}