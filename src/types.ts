export type PageId =
  | 'welcome'
  | 'login'
  | 'register'
  | 'dashboard'
  | 'categories'
  | 'waste-detail'
  | 'tips'
  | 'about'
  | 'contact'
  | 'thank-you';

export interface User {
  name: string;
  email: string;
}

export interface WasteCategory {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  decompositionTime: string;
  shortDescription: string;
  whatIsIt: string;
  commonExamples: string[];
  howToReduce: string[];
  howToReuse: string[];
  howToRecycle: string[];
  environmentalTip: string;
}

export interface RecyclingTipItem {
  id: string;
  title: string;
  iconName: string;
  category: string;
  shortSummary: string;
  steps: string[];
  ecoBenefit: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: string;
}
