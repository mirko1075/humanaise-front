export const ROI_METRICS = {
  timeReduction: {
    label: 'Time Reduction',
    data: [30, 45, 60, 75, 85],
    description: 'Percentage reduction in time spent on automated tasks'
  },
  costSavings: {
    label: 'Cost Savings',
    data: [20, 35, 50, 65, 80],
    description: 'Percentage reduction in operational costs'
  },
  productivity: {
    label: 'Productivity Increase',
    data: [25, 40, 55, 70, 85],
    description: 'Percentage increase in team productivity'
  },
  errorReduction: {
    label: 'Error Reduction',
    data: [40, 60, 75, 85, 95],
    description: 'Percentage reduction in human errors'
  }
} as const;

export const TIME_PERIODS = ['3 Months', '6 Months', '1 Year', '18 Months', '2 Years'] as const;