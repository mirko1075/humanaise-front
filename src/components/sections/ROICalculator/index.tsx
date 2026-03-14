import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { SliderControl } from './SliderControl';
import { MetricsChart } from './MetricsChart';
import { useTranslation } from '../../../hooks/useTranslation';
import { fadeInUp, scrollViewport } from '../../../utils/animations';

interface ROIState {
  hc: number;
  sal: number;
  pct: number;
  eff: number;
  setup: number;
  lic: number;
  maint: number;
  horizon: number;
}

const DEFAULTS: ROIState = { hc: 5, sal: 40000, pct: 40, eff: 75, setup: 15000, lic: 6000, maint: 3000, horizon: 3 };

const SCENARIOS: Record<string, ROIState> = {
  freelance: { hc: 1, sal: 25000, pct: 50, eff: 70, setup: 800, lic: 1200, maint: 300, horizon: 2 },
  edile: { hc: 8, sal: 38000, pct: 45, eff: 70, setup: 12000, lic: 5000, maint: 2000, horizon: 3 },
  clinica: { hc: 6, sal: 35000, pct: 55, eff: 80, setup: 18000, lic: 8000, maint: 3000, horizon: 3 },
  studio: { hc: 5, sal: 40000, pct: 60, eff: 75, setup: 10000, lic: 6000, maint: 2500, horizon: 3 },
};

function fmtEur(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? '-' : '';
  if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}€${Math.round(abs / 1_000)}k`;
  return `${sign}€${Math.round(abs)}`;
}

export interface ROICalcResult {
  totalPersonnel: number;
  autoPersonnel: number;
  annualSaving: number;
  annualAiCost: number;
  totalSaving: number;
  totalAiCost: number;
  netValue: number;
  roiPct: number;
  paybackMonths: number | null;
  horizon: number;
}

export function ROICalculator() {
  const t = useTranslation();
  const [state, setState] = useState<ROIState>(DEFAULTS);

  const update = useCallback((key: keyof ROIState, value: number) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const calc: ROICalcResult = useMemo(() => {
    const { hc, sal, pct, eff, setup, lic, maint, horizon } = state;
    const totalPersonnel = hc * sal;
    const autoPersonnel = totalPersonnel * (pct / 100);
    const annualSaving = autoPersonnel * (eff / 100);
    const annualAiCost = lic + maint;
    const totalSaving = annualSaving * horizon;
    const totalAiCost = setup + annualAiCost * horizon;
    const netValue = totalSaving - totalAiCost;
    const roiPct = totalAiCost > 0 ? (netValue / totalAiCost) * 100 : 0;
    const paybackMonths =
      annualSaving - annualAiCost > 0
        ? (setup / (annualSaving - annualAiCost)) * 12
        : null;

    return { totalPersonnel, autoPersonnel, annualSaving, annualAiCost, totalSaving, totalAiCost, netValue, roiPct, paybackMonths, horizon };
  }, [state]);

  const loadScenario = (key: string) => setState(SCENARIOS[key]);

  const verdictData = useMemo(() => {
    const { roiPct, paybackMonths, netValue } = calc;
    if (roiPct >= 200) {
      return {
        cls: 'border-emerald-500/25',
        icon: '✦',
        title: t.roi.verdict.excellent,
        body: `ROI ${Math.round(roiPct)}% · Payback ${paybackMonths !== null ? Math.round(paybackMonths) + ` ${t.roi.units.months}` : '—'} · €1 → €${(roiPct / 100 + 1).toFixed(1)}`,
      };
    }
    if (roiPct >= 50) {
      return {
        cls: 'border-emerald-500/25',
        icon: '↑',
        title: t.roi.verdict.solid,
        body: `ROI ${Math.round(roiPct)}% · ${fmtEur(netValue)} net`,
      };
    }
    if (roiPct >= 0) {
      return {
        cls: 'border-white/[0.08]',
        icon: '→',
        title: t.roi.verdict.marginal,
        body: `ROI ${Math.round(roiPct)}%`,
      };
    }
    return {
      cls: 'border-red-500/25',
      icon: '↓',
      title: t.roi.verdict.negative,
      body: `ROI ${Math.round(roiPct)}%`,
    };
  }, [calc, t]);

  const barPercent = (val: number) =>
    calc.totalPersonnel > 0 ? Math.round((Math.min(val, calc.totalPersonnel) / calc.totalPersonnel) * 100) : 0;

  const scenarioKeys = Object.keys(SCENARIOS);

  return (
    <section id="roi-calculator" className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <Container className="relative">
        <SectionHeading title={t.roi.title} subtitle={t.roi.subtitle} theme="dark" />

        {/* Input Panels */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {/* Staff Panel */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5 text-[10px] font-mono tracking-[0.15em] uppercase text-primary-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.roi.panels.staff}
            </div>
            <SliderControl label={t.roi.inputs.employees} value={state.hc} onChange={(v) => update('hc', v)} min={1} max={50} step={1} variant="green" help={t.roi.help.employees} />
            <SliderControl label={t.roi.inputs.annualCostPerPerson} value={state.sal} onChange={(v) => update('sal', v)} min={5000} max={120000} step={100} inputMax={9999999} variant="green" help={t.roi.help.annualCostPerPerson} />
            <SliderControl label={t.roi.inputs.autoTaskPercent} value={state.pct} onChange={(v) => update('pct', v)} min={5} max={80} step={1} variant="green" help={t.roi.help.autoTaskPercent} />
            <SliderControl label={t.roi.inputs.aiEfficiency} value={state.eff} onChange={(v) => update('eff', v)} min={20} max={95} step={1} variant="green" help={t.roi.help.aiEfficiency} />
          </div>

          {/* Investment Panel */}
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5 text-[10px] font-mono tracking-[0.15em] uppercase text-primary-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {t.roi.panels.investment}
            </div>
            <SliderControl label={t.roi.inputs.setupCost} value={state.setup} onChange={(v) => update('setup', v)} min={0} max={100000} step={100} inputMax={9999999} variant="blue" help={t.roi.help.setupCost} />
            <SliderControl label={t.roi.inputs.licensesPerYear} value={state.lic} onChange={(v) => update('lic', v)} min={0} max={60000} step={100} inputMax={9999999} variant="blue" help={t.roi.help.licensesPerYear} />
            <SliderControl label={t.roi.inputs.maintenancePerYear} value={state.maint} onChange={(v) => update('maint', v)} min={0} max={30000} step={100} inputMax={9999999} variant="blue" help={t.roi.help.maintenancePerYear} />
            <SliderControl label={t.roi.inputs.analysisHorizon} value={state.horizon} onChange={(v) => update('horizon', v)} min={1} max={10} step={1} variant="blue" help={t.roi.help.analysisHorizon} />
          </div>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <MetricCard label={t.roi.metrics.totalSavings} value={fmtEur(calc.totalSaving)} color="text-emerald-400" highlight={calc.totalSaving > 0} />
          <MetricCard label={t.roi.metrics.totalAiCost} value={fmtEur(calc.totalAiCost)} color="text-red-400" />
          <MetricCard
            label={t.roi.metrics.netRoi}
            value={`${calc.roiPct >= 0 ? '+' : ''}${Math.round(calc.roiPct)}%`}
            color={calc.roiPct >= 0 ? 'text-blue-400' : 'text-red-400'}
          />
          <MetricCard
            label={t.roi.metrics.paybackPeriod}
            value={
              calc.paybackMonths !== null
                ? calc.paybackMonths < 1
                  ? t.roi.units.lessThanMonth
                  : `${Math.round(calc.paybackMonths)} ${t.roi.units.months}`
                : t.roi.units.na
            }
            color="text-amber-400"
          />
        </motion.div>

        {/* Breakdown */}
        <motion.div
          className="bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-primary-300 mb-4">
            {t.roi.breakdown.title}
          </div>

          <BreakdownBar label={t.roi.breakdown.personnelCost} value={fmtEur(calc.totalPersonnel)} percent={100} color="bg-white/10" />
          <BreakdownBar label={t.roi.breakdown.autoHours} value={fmtEur(calc.autoPersonnel)} percent={barPercent(calc.autoPersonnel)} color="bg-blue-400" />
          <BreakdownBar label={t.roi.breakdown.effectiveSavingsYear} value={fmtEur(calc.annualSaving)} percent={barPercent(calc.annualSaving)} color="bg-emerald-400" />
          <BreakdownBar label={t.roi.breakdown.aiCostYear} value={fmtEur(calc.annualAiCost)} percent={barPercent(calc.annualAiCost)} color="bg-red-400" />

          {/* Verdict */}
          <div className={`flex items-start gap-3 p-4 rounded-xl mt-4 bg-white/[0.03] border ${verdictData.cls} transition-all`}>
            <span className="text-lg flex-shrink-0 mt-0.5">{verdictData.icon}</span>
            <div className="text-sm text-primary-300 leading-relaxed">
              <strong className="text-white font-medium">{verdictData.title}</strong>{' '}
              {verdictData.body}
            </div>
          </div>
        </motion.div>

        {/* Chart */}
        <MetricsChart calc={calc} />

        {/* Scenarios */}
        <motion.div
          className="mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-primary-300 mb-4">
            {t.roi.scenarios.title}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {t.roi.scenarios.items.map((scenario, i) => (
              <button
                key={scenarioKeys[i]}
                onClick={() => loadScenario(scenarioKeys[i])}
                className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 text-left transition-all hover:border-white/[0.13] hover:bg-white/[0.06] group"
              >
                <div className="text-sm font-medium text-white mb-0.5 group-hover:text-emerald-400 transition-colors">
                  {scenario.title}
                </div>
                <div className="text-xs text-primary-400 leading-relaxed">
                  {scenario.description}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-[11px] font-mono text-primary-400 tracking-wide">
          {t.roi.footer}
        </div>
      </Container>
    </section>
  );
}

function MetricCard({
  label,
  value,
  color,
  highlight,
}: {
  label: string;
  value: string;
  color: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`bg-white/[0.04] border rounded-xl p-4 transition-colors ${
        highlight ? 'border-emerald-500/20' : 'border-white/[0.07]'
      }`}
    >
      <div className="text-[11px] font-mono uppercase text-primary-400 tracking-wide mb-1.5">
        {label}
      </div>
      <div className={`text-xl font-mono font-medium ${color}`}>{value}</div>
    </div>
  );
}

function BreakdownBar({
  label,
  value,
  percent,
  color,
}: {
  label: string;
  value: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2.5">
      <div className="text-xs text-primary-400 min-w-[170px]">{label}</div>
      <div className="flex-1 h-1.5 bg-white/[0.05] rounded-sm overflow-hidden">
        <div
          className={`h-full rounded-sm transition-all duration-400 ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-xs font-mono text-white min-w-[70px] text-right">{value}</div>
    </div>
  );
}
