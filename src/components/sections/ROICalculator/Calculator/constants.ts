export const DEFAULT_INPUTS = {
  currentCost: 50000,      // $50,000 implementation cost
  employeeCount: 10,       // 10 employees
  hoursPerWeek: 40,       // 40 hours per week (standard work week)
  hourlyRate: 35,         // $35 per hour average rate
  automationPercentage: 30 // 30% automation expected
} as const;

export const FIELD_CONSTRAINTS = {
  currentCost: {
    min: 0,
    step: 0.01
  },
  employeeCount: {
    min: 1,
    step: 1
  },
  hoursPerWeek: {
    min: 1,
    max: 168,
    step: 1
  },
  hourlyRate: {
    min: 0,
    step: 0.01
  },
  automationPercentage: {
    min: 0,
    max: 100,
    step: 0.1
  }
} as const;