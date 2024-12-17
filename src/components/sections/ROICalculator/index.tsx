import React, { useState } from 'react';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Calculator } from './Calculator';
import { MetricsChart } from './MetricsChart';
import { useTranslations } from '../../../hooks/useTranslations';
import { ROIResults } from '../../../types/roi';
import { useCalculator } from './Calculator/useCalculator';

export function ROICalculator() {
  const { roi } = useTranslations();
  const [results, setResults] = useState<ROIResults | null>(null);
  const {
    inputs,
    errors,
    handleInputChange,
    calculateROI,
    resetCalculator,
    isValid,
    isComplete
  } = useCalculator(setResults);

  return (
    <section id="roi-calculator" className="py-20 bg-primary-900">
      <Container>
        <SectionHeading
          title={roi.calculator.title}
          subtitle={roi.calculator.subtitle}
          theme="dark"
        />
        
        <div className="space-y-12">
          <Calculator 
            inputs={inputs}
            errors={errors}
            onInputChange={handleInputChange}
            onCalculate={calculateROI}
            onReset={resetCalculator}
            isValid={isValid}
            results={results}
          />
          <MetricsChart 
            results={results} 
            isFormComplete={isComplete}
          />
        </div>
      </Container>
    </section>
  );
}