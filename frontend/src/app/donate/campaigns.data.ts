export interface Campaign {
  title: string;
  type: 'Active' | 'Ongoing' | 'Closed';
  goal: string;
  cost: string;
  description: string;
}

export const CAMPAIGN_DATA: Campaign[] = [
  {
    title: "Ramadan Drive 2026",
    type: "Closed",
    goal: "Goal Reached: 250 Families",
    cost: "PKR 6,500 per Package",
    description: "Alhamdulillah, all target families received their ration packs."
  },
  {
    title: "Monthly Ration Support",
    type: "Ongoing",
    goal: "Ongoing: 50+ Families",
    cost: "PKR 6,500 per Month",
    description: "Continuous food security for widows and low-income households."
  },
  {
    title: "General Sadaqah & Zakat",
    type: "Ongoing",
    goal: "Open Contribution",
    cost: "Any Amount",
    description: "Supporting community emergencies and local welfare needs."
  }
];
