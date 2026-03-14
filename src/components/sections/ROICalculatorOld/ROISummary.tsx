import React from 'react';
import { ROI_METRICS } from '../../../constants/roi-data';
import { Card } from '../../ui/Card';

export function ROISummary() {
  return (
    <div className="space-y-6">
      {Object.entries(ROI_METRICS).map(([key, metric]) => (
        <Card key={key} className="bg-primary-800/50 border border-primary-700">
          <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
          <p className="text-primary-200">{metric.description}</p>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-primary-300">Average improvement</span>
              <span className="text-2xl font-bold text-white">
                {Math.round(
                  metric.data.reduce((a, b) => a + b, 0) / metric.data.length
                )}%
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}