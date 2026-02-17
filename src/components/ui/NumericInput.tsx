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
      <label htmlFor={id} className="block text-sm font-medium text-indigo-300 mb-1.5">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400">
            {prefix}
          </span>
        )}
        <input
          type="number"
          id={id}
          value={value || ''}
          onChange={handleChange}
          className={`w-full rounded-xl bg-white/[0.06] backdrop-blur-sm border ${
            error ? 'border-red-500' : 'border-white/[0.12]'
          } text-white placeholder-indigo-400/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200
            ${prefix ? 'pl-8' : 'pl-4'} ${suffix ? 'pr-8' : 'pr-4'} py-2.5`}
          placeholder="0"
          min={min}
          max={max}
          step={step}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
