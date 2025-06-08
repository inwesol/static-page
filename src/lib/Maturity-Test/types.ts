export interface PersonalInfo {
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  phone?: string;
}

export interface QuestionnaireResponse {
  [key: number]: 'Agree' | 'Disagree';
}

export interface TestResults {
  concern: number;
  curiosity: number;
  confidence: number;
  consultation: number;
}

export type TestStage = 'intro' | 'personal-info' | 'questionnaire' | 'results';