import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ROIResults } from '../../../types/roi';
import { useTranslation } from '../../../hooks/useTranslation';
import { formatCurrency } from '../../../utils/format';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MetricsChartProps {
  results: ROIResults | null;
  isFormComplete: boolean;
}

export function MetricsChart({ results, isFormComplete }: MetricsChartProps) {
  const t = useTranslation();

  if (!isFormComplete) {
    return (
      <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6">
        <div className="h-[300px] flex items-center justify-center text-primary-300">
          {t.roi.calculator.enterDetails}
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  // Generate forecast data points
  const generateForecastData = (baseValue: number) => {
    return [
      baseValue * 0.3,  // 3 months
      baseValue * 0.6,  // 6 months
      baseValue,        // 1 year
      baseValue * 1.5,  // 18 months
      baseValue * 2,    // 2 years
    ];
  };

  const data = {
    labels: ['3 Months', '6 Months', '1 Year', '18 Months', '2 Years'],
    datasets: [
      {
        label: t.roi.calculator.results.annualSavings,
        data: generateForecastData(results.annualSavings),
        borderColor: 'rgb(52, 211, 153)',
        backgroundColor: 'rgba(52, 211, 153, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(52, 211, 153)',
      },
      {
        label: t.roi.calculator.results.timeFreed,
        data: generateForecastData(results.hoursFreedAnnually),
        borderColor: 'rgb(96, 165, 250)',
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(96, 165, 250)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: '600'
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12
        },
        padding: 14,
        cornerRadius: 12,
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return label.includes('Savings')
              ? `${label}: ${formatCurrency(value)}`
              : `${label}: ${Math.round(value)} hours`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.06)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          callback: function(value: any) {
            return value >= 1000 ? `${value/1000}k` : value;
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.06)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  return (
    <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6">
      <Line data={data} options={options} />
    </div>
  );
}
