import React from 'react';
import { Button } from '../../../ui/Button';
import { ROIInputs } from '../../../../types/roi';
import { useTranslations } from '../../../../hooks/useTranslations';
import { NumericInput } from '../../../ui/NumericInput';

interface InputFormProps {
  inputs: ROIInputs;
  onInputChange: (field: keyof ROIInputs, value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
}

export function InputForm({ inputs, onInputChange, onCalculate, onReset }: InputFormProps) {
  const { roi } = useTranslations();

  const handleInputChange = (field: keyof ROIInputs) => (value: number) => {
    onInputChange(field, value);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <NumericInput
          id="currentCost"
          label={roi.calculator.inputs.currentCost}
          value={inputs.currentCost}
          onChange={handleInputChange('currentCost')}
          min={0}
          prefix="$"
        />

        <NumericInput
          id="employeeCount"
          label={roi.calculator.inputs.employeeCount}
          value={inputs.employeeCount}
          onChange={handleInputChange('employeeCount')}
          min={1}
          step={1}
        />

        <NumericInput
          id="hoursPerWeek"
          label={roi.calculator.inputs.hoursPerWeek}
          value={inputs.hoursPerWeek}
          onChange={handleInputChange('hoursPerWeek')}
          min={0}
          max={168}
        />

        <NumericInput
          id="hourlyRate"
          label={roi.calculator.inputs.hourlyRate}
          value={inputs.hourlyRate}
          onChange={handleInputChange('hourlyRate')}
          min={0}
          prefix="$"
        />

        <NumericInput
          id="automationPercentage"
          label={roi.calculator.inputs.automationPercentage}
          value={inputs.automationPercentage}
          onChange={handleInputChange('automationPercentage')}
          min={0}
          max={100}
          suffix="%"
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={onCalculate} className="flex-1">
          {roi.calculator.buttons.calculate}
        </Button>
        <Button variant="outline" onClick={onReset}>
          {roi.calculator.buttons.reset}
        </Button>
      </div>
    </div>
  );
}