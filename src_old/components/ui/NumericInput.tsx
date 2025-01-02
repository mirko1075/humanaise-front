import React from 'react';

interface NumericInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string | null;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export function NumericInput({
  id,
  label,
  value,
  onChange,
  error,
  min,
  max,
  step = 1,
  prefix,
  suffix
}: NumericInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-indigo-300 mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300">
            {prefix}
          </span>
        )}
        <input
          type="number"
          id={id}
          value={value || ''}
          onChange={handleChange}
          className={`w-full rounded-lg bg-primary-800/50 border ${
            error ? 'border-red-500' : 'border-primary-600'
          } text-white placeholder-primary-400 focus:border-indigo-400 focus:ring-indigo-400
            ${prefix ? 'pl-8' : 'pl-4'} ${suffix ? 'pr-8' : 'pr-4'} py-2`}
          placeholder="0"
          min={min}
          max={max}
          step={step}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-300">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}