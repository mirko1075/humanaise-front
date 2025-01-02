export interface ROIInputs {
  currentCost: number;
  employeeCount: number;
  hoursPerWeek: number;
  hourlyRate: number;
  automationPercentage: number;
}

export interface ROIResults {
  annualSavings: number;
  hoursFreedAnnually: number;
  roi: number;
}