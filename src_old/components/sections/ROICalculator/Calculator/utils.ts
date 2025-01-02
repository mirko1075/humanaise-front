import { ROIInputs, ROIResults } from '../../../../types/roi';

export function calculateResults(inputs: ROIInputs): ROIResults {
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

  return {
    annualSavings: automationSavings,
    hoursFreedAnnually,
    roi: Math.max(0, roi)
  };
}

export function getInitialErrors(): Record<keyof ROIInputs, string | null> {
  return {
    currentCost: null,
    employeeCount: null,
    hoursPerWeek: null,
    hourlyRate: null,
    automationPercentage: null,
  };
}