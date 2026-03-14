import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  sliderMax?: number;
  step: number;
  inputMax?: number;
  variant?: 'green' | 'blue';
  help?: string;
}

export function SliderControl({
  label,
  value,
  onChange,
  min,
  max,
  sliderMax,
  step,
  inputMax,
  variant = 'green',
  help,
}: SliderControlProps) {
  const [showHelp, setShowHelp] = useState(false);
  const effectiveSliderMax = sliderMax ?? max;
  const effectiveInputMax = inputMax ?? 9999999;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    onChange(Math.max(min, val));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className="mb-3">
      <div className="flex items-baseline justify-between mb-1 gap-2">
        <span className="text-xs text-primary-300 flex items-center gap-1.5">
          {label}
          {help && (
            <button
              type="button"
              onClick={() => setShowHelp(!showHelp)}
              className="inline-flex items-center text-primary-400 hover:text-blue-400 transition-colors"
              aria-label="Help"
            >
              <HelpCircle className="w-3 h-3" />
            </button>
          )}
        </span>
        <input
          type="number"
          value={value}
          min={min}
          max={effectiveInputMax}
          step={step}
          onChange={handleInputChange}
          className="w-20 bg-transparent border-b border-white/[0.13] text-right text-sm font-mono text-white outline-none focus:border-blue-400 focus:text-blue-400 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      {showHelp && help && (
        <div className="text-[11px] text-primary-400 leading-relaxed mb-1.5 pl-0.5 animate-in fade-in">
          {help}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={effectiveSliderMax}
        step={step}
        value={Math.min(value, effectiveSliderMax)}
        onChange={handleSliderChange}
        className={`w-full h-[2px] rounded-sm outline-none cursor-pointer appearance-none bg-white/[0.13]
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary-900 [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(255,255,255,0.13)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-[1.3]
          ${variant === 'green'
            ? '[&::-webkit-slider-thumb]:bg-white focus:[&::-webkit-slider-thumb]:bg-emerald-400'
            : '[&::-webkit-slider-thumb]:bg-blue-400'
          }`}
      />
    </div>
  );
}
