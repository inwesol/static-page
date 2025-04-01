export interface Occupation {
  title: string;
  description: string;
  category?: string;
  onetsoc_code: string;
} 

// Type for the Interest options (RIASEC)
export interface InterestOption {
  value: string;
  label: string;
  description: string;
}