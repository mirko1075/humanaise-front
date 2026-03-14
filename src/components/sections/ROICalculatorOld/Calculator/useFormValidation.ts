import { ROIInputs } from '../../../../types/roi';

export function useFormValidation(inputs: ROIInputs) {
  const isFormComplete = () => {
    return (
      inputs.currentCost > 0 &&
      inputs.employeeCount > 0 &&
      inputs.hoursPerWeek > 0 &&
      inputs.hourlyRate > 0 &&
      inputs.automationPercentage > 0 &&
      inputs.automationPercentage <= 100
    );
  };

  const getFieldError = (field: keyof ROIInputs): string | null => {
    switch (field) {
      case 'currentCost':
        return inputs.currentCost <= 0 ? 'Must be greater than 0' : null;
      case 'employeeCount':
        return inputs.employeeCount <= 0 ? 'Must be greater than 0' : null;
      case 'hoursPerWeek':
        return inputs.hoursPerWeek <= 0 || inputs.hoursPerWeek > 168 
          ? 'Must be between 1 and 168' : null;
      case 'hourlyRate':
        return inputs.hourlyRate <= 0 ? 'Must be greater than 0' : null;
      case 'automationPercentage':
        return inputs.automationPercentage <= 0 || inputs.automationPercentage > 100 
          ? 'Must be between 1 and 100' : null;
      default:
        return null;
    }
  };

  return {
    isFormComplete,
    getFieldError
  };
}