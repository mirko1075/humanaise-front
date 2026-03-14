import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  TooltipItem,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { useTranslation } from '../../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../../utils/animations';
import type { ROICalcResult } from './index';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

function fmtEur(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? '-' : '';
  if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}€${Math.round(abs / 1_000)}k`;
  return `${sign}€${Math.round(abs)}`;
}

interface MetricsChartProps {
  calc: ROICalcResult;
}

export function MetricsChart({ calc }: MetricsChartProps) {
  const t = useTranslation();

  const chartData = useMemo(() => {
    const { annualSaving, annualAiCost, horizon } = calc;
    const setup = calc.totalAiCost - annualAiCost * horizon;
    const steps = horizon * 12;
    const stepSize = Math.max(1, Math.round(steps / 20));

    const labels: string[] = [];
    const savings: number[] = [];
    const costs: number[] = [];
    const nets: number[] = [];

    for (let m = 0; m <= steps; m += stepSize) {
      const yr = m / 12;
      if (m === 0) labels.push(t.roi.units.now);
      else if (m % 12 === 0) labels.push(`${t.roi.units.year} ${Math.round(yr)}`);
      else labels.push(`${(Math.round(yr * 10) / 10)}a`);
      savings.push(Math.round(annualSaving * yr));
      costs.push(Math.round(setup + annualAiCost * yr));
      nets.push(Math.round(annualSaving * yr - (setup + annualAiCost * yr)));
    }

    return { labels, savings, costs, nets };
  }, [calc, t]);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: t.roi.chart.savings,
        data: chartData.savings,
        borderColor: '#34d399',
        backgroundColor: 'rgba(52, 211, 153, 0.05)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: t.roi.chart.aiCost,
        data: chartData.costs,
        borderColor: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.05)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: t.roi.chart.net,
        data: chartData.nets,
        borderColor: '#60a5fa',
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [5, 3],
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#18181f',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        titleColor: '#6b7280',
        bodyColor: '#f0ede8',
        titleFont: { family: 'monospace', size: 11 },
        bodyFont: { family: 'monospace', size: 12 },
        callbacks: {
          label(ctx: TooltipItem<'line'>) {
            return ` ${fmtEur(ctx.parsed.y)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { autoSkip: true, maxTicksLimit: 8, font: { size: 11, family: 'monospace' }, color: '#6b7280' },
        grid: { color: 'rgba(255,255,255,0.04)' },
      },
      y: {
        ticks: {
          font: { size: 11, family: 'monospace' },
          color: '#6b7280',
          callback: (v) => fmtEur(v as number),
        },
        grid: { color: 'rgba(255,255,255,0.04)' },
      },
    },
    interaction: { intersect: false, mode: 'index' as const },
  };

  return (
    <motion.div
      className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6 mb-6"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
    >
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2.5">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.15em] uppercase text-primary-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          {t.roi.chart.title}
        </div>
        <div className="flex gap-4 flex-wrap">
          <LegendItem color="bg-emerald-400" label={t.roi.chart.savings} />
          <LegendItem color="bg-red-400" label={t.roi.chart.aiCost} />
          <LegendItem color="bg-blue-400" label={t.roi.chart.net} dashed />
        </div>
      </div>
      <div className="relative w-full h-[240px]">
        <Line data={data} options={options} />
      </div>
    </motion.div>
  );
}

function LegendItem({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-mono text-primary-400">
      <div className={`w-2 h-2 rounded-sm ${color} ${dashed ? 'opacity-60' : ''}`} />
      {label}
    </div>
  );
}
