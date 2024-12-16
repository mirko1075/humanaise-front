import React from 'react';
import { AboutNav } from './AboutNav';
import { Mission } from './Mission';
import { Journey } from './Journey';
import { Vision } from './Vision';
import { CoreValues } from '../CoreValues';

export function About() {
  return (
    <div id="about" className="bg-primary-950">
      <AboutNav />
      <Mission />
      <Journey />
      <Vision />
      <CoreValues />
    </div>
  );
}