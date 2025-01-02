import React from 'react';
import { COMPANY } from '../../../constants/company';

export function Copyright() {
  return (
    <div className="mt-16 pt-8 border-t border-gray-800">
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </p>
    </div>
  );
}