import { ROIInputs, ROIResults } from '../../../../types/roi';

export interface CalculatorProps {
  inputs: ROIInputs;
  onInputChange: (field: keyof ROIInputs, value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
  results: ROIResults | null;
}

export interface InputFormProps {
  inputs: ROIInputs;
  onInputChange: (field: keyof ROIInputs, value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
}

export interface ResultsProps {
  results: ROIResults | null;
}