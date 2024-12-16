import { Language } from '../../../types/language';

type ROITranslations = {
  calculator: {
    title: string;
    subtitle: string;
    inputs: {
      currentCost: string;
      employeeCount: string;
      hoursPerWeek: string;
      hourlyRate: string;
      automationPercentage: string;
    };
    buttons: {
      calculate: string;
      reset: string;
    };
    results: {
      title: string;
      annualSavings: string;
      timeFreed: string;
      roi: string;
      description: string;
    };
  };
};

export const roiTranslations: Record<Language, ROITranslations> = {
  en: {
    calculator: {
      title: 'ROI Calculator',
      subtitle: 'Calculate your potential return on investment',
      inputs: {
        currentCost: 'Current Implementation Cost',
        employeeCount: 'Number of Employees',
        hoursPerWeek: 'Hours Worked per Week',
        hourlyRate: 'Average Hourly Rate',
        automationPercentage: 'Expected Automation Percentage'
      },
      buttons: {
        calculate: 'Calculate ROI',
        reset: 'Reset'
      },
      results: {
        title: 'Your Potential Returns',
        annualSavings: 'Annual Cost Savings',
        timeFreed: 'Hours Freed Annually',
        roi: 'Return on Investment',
        description: 'These calculations are estimates based on the information provided.'
      }
    }
  },
  es: {
    calculator: {
      title: 'Calculadora de ROI',
      subtitle: 'Calcula tu retorno potencial de inversión',
      inputs: {
        currentCost: 'Costo Actual de Implementación',
        employeeCount: 'Número de Empleados',
        hoursPerWeek: 'Horas Trabajadas por Semana',
        hourlyRate: 'Tarifa Promedio por Hora',
        automationPercentage: 'Porcentaje de Automatización Esperado'
      },
      buttons: {
        calculate: 'Calcular ROI',
        reset: 'Reiniciar'
      },
      results: {
        title: 'Tus Retornos Potenciales',
        annualSavings: 'Ahorro Anual en Costos',
        timeFreed: 'Horas Liberadas Anualmente',
        roi: 'Retorno de Inversión',
        description: 'Estos cálculos son estimaciones basadas en la información proporcionada.'
      }
    }
  },
  fr: {
    calculator: {
      title: 'Calculateur de ROI',
      subtitle: 'Calculez votre retour sur investissement potentiel',
      inputs: {
        currentCost: 'Coût Actuel d\'Implémentation',
        employeeCount: 'Nombre d\'Employés',
        hoursPerWeek: 'Heures Travaillées par Semaine',
        hourlyRate: 'Taux Horaire Moyen',
        automationPercentage: 'Pourcentage d\'Automatisation Prévu'
      },
      buttons: {
        calculate: 'Calculer le ROI',
        reset: 'Réinitialiser'
      },
      results: {
        title: 'Vos Retours Potentiels',
        annualSavings: 'Économies Annuelles',
        timeFreed: 'Heures Libérées Annuellement',
        roi: 'Retour sur Investissement',
        description: 'Ces calculs sont des estimations basées sur les informations fournies.'
      }
    }
  },
  it: {
    calculator: {
      title: 'Calcolatore ROI',
      subtitle: 'Calcola il tuo potenziale ritorno sull\'investimento',
      inputs: {
        currentCost: 'Costo Attuale di Implementazione',
        employeeCount: 'Numero di Dipendenti',
        hoursPerWeek: 'Ore Lavorate per Settimana',
        hourlyRate: 'Tariffa Oraria Media',
        automationPercentage: 'Percentuale di Automazione Prevista'
      },
      buttons: {
        calculate: 'Calcola ROI',
        reset: 'Reimposta'
      },
      results: {
        title: 'I tuoi Ritorni Potenziali',
        annualSavings: 'Risparmio Annuale sui Costi',
        timeFreed: 'Ore Liberate Annualmente',
        roi: 'Ritorno sull\'Investimento',
        description: 'Questi calcoli sono stime basate sulle informazioni fornite.'
      }
    }
  }
};