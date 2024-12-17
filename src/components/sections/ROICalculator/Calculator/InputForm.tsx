import React from 'react';
import { Button } from '../../../ui/Button';
import { ROIInputs } from '../../../../types/roi';
import { useTranslations } from '../../../../hooks/useTranslations';
import { InputField } from './InputField';

interface InputFormProps {
  inputs: ROIInputs;
  errors: Record<keyof ROIInputs, string | null>;
  onInputChange: (field: keyof ROIInputs, value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
  isValid: boolean;
}

export function InputForm({ 
  inputs, 
  errors,
  onInputChange, 
  onCalculate, 
  onReset,
  isValid 
}: InputFormProps) {
  const { roi } = useTranslations();

  const handleInputChange = (field: keyof ROIInputs) => (value: number) => {
    onInputChange(field, value);
  };

  const fields = [
    {
      field: 'currentCost' as keyof ROIInputs,
      label: roi.calculator.inputs.currentCost,
      prefix: '$'
    },
    {
      field: 'employeeCount' as keyof ROIInputs,
      label: roi.calculator.inputs.employeeCount
    },
    {
      field: 'hoursPerWeek' as keyof ROIInputs,
      label: roi.calculator.inputs.hoursPerWeek
    },
    {
      field: 'hourlyRate' as keyof ROIInputs,
      label: roi.calculator.inputs.hourlyRate,
      prefix: '$'
    },
    {
      field: 'automationPercentage' as keyof ROIInputs,
      label: roi.calculator.inputs.automationPercentage,
      suffix: '%'
    }
  ];

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onCalculate();
      }}
      className="space-y-6"
      noValidate
    >
      <div className="space-y-4">
        {fields.map(({ field, label, prefix, suffix }) => (
          <InputField
            key={field}
            field={field}
            label={label}
            value={inputs[field]}
            onChange={handleInputChange(field)}
            error={errors[field]}
            prefix={prefix}
            suffix={suffix}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <Button 
          type="submit"
          className="flex-1"
          disabled={!isValid}
        >
          {roi.calculator.buttons.calculate}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={onReset}
        >
          {roi.calculator.buttons.reset}
        </Button>
      </div>
    </form>
  );
}