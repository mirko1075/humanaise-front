import React from 'react';
import { NumericInput } from '../../../ui/NumericInput';
import { ROIInputs } from '../../../../types/roi';
import { validationRules } from './validation';

interface InputFieldProps {
  field: keyof ROIInputs;
  label: string;
  value: number;
  onChange: (value: number) => void;
  error: string | null;
  prefix?: string;
  suffix?: string;
}

export function InputField({ 
  field, 
  label, 
  value, 
  onChange, 
  error,
  prefix,
  suffix 
}: InputFieldProps) {
  const rule = validationRules[field];
  const min = field === 'automationPercentage' ? 0 : field === 'hoursPerWeek' ? 1 : 0;
  const max = field === 'automationPercentage' ? 100 : field === 'hoursPerWeek' ? 168 : undefined;
  const step = ['employeeCount', 'hoursPerWeek'].includes(field) ? 1 : 0.01;

  return (
    <NumericInput
      id={field}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      min={min}
      max={max}
      step={step}
      prefix={prefix}
      suffix={suffix}
      aria-invalid={!!error}
      aria-describedby={error ? `${field}-error` : undefined}
    />
  );
}