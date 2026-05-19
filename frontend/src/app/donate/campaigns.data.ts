export interface SliderCampaign {
  title: string;
  type: 'Active' | 'Ongoing' | 'Closed';
  description: string;
}

// 1. Text meant for the landing page slider
export const LANDING_SLIDER_DATA: SliderCampaign[] = [
  {
    title: "Ramadan Drive 2026",
    type: "Closed",
    description: "Alhamdulillah, 250 families were served with essential food packages."
  },
  {
    title: "Monthly Ration Support",
    type: "Ongoing",
    description: "Providing continuous monthly food security for widows and low-income households."
  },
  {
    title: "General Support",
    type: "Ongoing",
    description: "Ongoing assistance for Educational Expenses, Health Support, and Marriage Expenses."
  }
];

// 2. Exact allocation categories for the donation form dropdown
export const DONATION_OPTIONS: string[] = [
  "Monthly Ration Support - Sadqa",
  "Monthly Ration Support - Zakat",
  "Monthly Ration Support - Kharaat",
  "General Support - Educational Expense - Sadqa",
  "General Support - Educational Expense - Zakat",
  "General Support - Educational Expense - Kherat",
  "General Support - Health - Sadqa",
  "General Support - Health - Zakat",
  "General Support - Health - Kherat",
  "General Support - Marriage Expenses - Sadqa",
  "General Support - Marriage Expenses - Zakat",
  "General Support - Marriage Expenses - Kharaat"
];
