import React from 'react';
import { ROIResults } from '../../../../types/roi';
import { useTranslations } from '../../../../hooks/useTranslations';
import { formatCurrency, formatNumber } from '../../../../utils/format';

interface ResultsProps {
  results: ROIResults | null;
}

export function Results({ results }: ResultsProps) {
  const { roi } = useTranslations();

  if (!results) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-primary-300 text-center">
          {roi.calculator.results.description}
        </p>
      </div>
    );
  }

  const metrics = [
    {
      label: roi.calculator.results.annualSavings,
      value: formatCurrency(results.annualSavings),
      color: 'text-emerald-400'
    },
    {
      label: roi.calculator.results.timeFreed,
      value: `${formatNumber(results.hoursFreedAnnually)} hrs`,
      color: 'text-blue-400'
    },
    {
      label: roi.calculator.results.roi,
      value: `${formatNumber(results.roi)}%`,
      color: 'text-gradient'
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        {roi.calculator.results.title}
      </h3>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4">
            <div className="text-sm text-indigo-300 mb-1">{metric.label}</div>
            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
