import { ROIInputs } from '../../../../types/roi';

export interface ValidationRule {
  validate: (value: number) => boolean;
  message: string;
}

export const validationRules: Record<keyof ROIInputs, ValidationRule> = {
  currentCost: {
    validate: (value) => value > 0,
    message: 'Must be greater than 0'
  },
  employeeCount: {
    validate: (value) => value > 0 && Number.isInteger(value),
    message: 'Must be a positive whole number'
  },
  hoursPerWeek: {
    validate: (value) => value > 0 && value <= 168 && Number.isInteger(value),
    message: 'Must be between 1 and 168 hours'
  },
  hourlyRate: {
    validate: (value) => value > 0,
    message: 'Must be greater than 0'
  },
  automationPercentage: {
    validate: (value) => value > 0 && value <= 100,
    message: 'Must be between 1 and 100'
  }
};

export function validateField(field: keyof ROIInputs, value: number): string | null {
  const rule = validationRules[field];
  return rule.validate(value) ? null : rule.message;
}

export function isFormValid(inputs: ROIInputs): boolean {
  return Object.entries(inputs).every(([field, value]) => 
    validationRules[field as keyof ROIInputs].validate(value)
  );
}