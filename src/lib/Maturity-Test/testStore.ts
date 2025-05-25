import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersonalInfo, QuestionnaireResponse, TestResults, TestStage } from '@/lib/Maturity-Test/types';
import { 
  CONCERN_QUESTIONS, 
  CURIOSITY_QUESTIONS, 
  CONFIDENCE_QUESTIONS, 
  CONSULTATION_QUESTIONS 
} from '@/lib/Maturity-Test/constants';

interface TestState {
  stage: TestStage;
  personalInfo: PersonalInfo | null;
  responses: QuestionnaireResponse;
  results: TestResults | null;
  setStage: (stage: TestStage) => void;
  setPersonalInfo: (info: PersonalInfo) => void;
  setResponse: (questionNumber: number, response: 'Agree' | 'Disagree') => void;
  calculateResults: () => void;
  resetTest: () => void;
}

export const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      stage: 'intro',
      personalInfo: null,
      responses: {},
      results: null,
      setStage: (stage) => set({ stage }),
      setPersonalInfo: (info) => set({ personalInfo: info }),
      setResponse: (questionNumber, response) => 
        set((state) => ({
          responses: { ...state.responses, [questionNumber]: response }
        })),
      calculateResults: () => {
        const { responses } = get();
        
        let concernScore = 0;
        let curiosityScore = 0;
        let confidenceScore = 0;
        let consultationScore = 0;
        
        // Calculate Concern score
        CONCERN_QUESTIONS.forEach(q => {
          if (responses[q] === 'Disagree') concernScore++;
        });
        
        // Calculate Curiosity score
        CURIOSITY_QUESTIONS.forEach(q => {
          if (responses[q] === 'Disagree') curiosityScore++;
        });
        
        // Calculate Confidence score
        CONFIDENCE_QUESTIONS.forEach(q => {
          if (responses[q] === 'Disagree') confidenceScore++;
        });
        
        // Calculate Consultation score
        CONSULTATION_QUESTIONS.forEach(q => {
          const correctAnswer = [8, 12, 20, 24].includes(q) ? 'Agree' : 'Disagree';
          if (responses[q] === correctAnswer) consultationScore++;
        });
        
        const results = {
          concern: (concernScore / 6) * 100,
          curiosity: (curiosityScore / 6) * 100,
          confidence: (confidenceScore / 6) * 100,
          consultation: (consultationScore / 6) * 100
        };
        
        set({ results });
      },
      resetTest: () => set({ 
        stage: 'intro',
        personalInfo: null,
        responses: {},
        results: null
      }),
    }),
    {
      name: 'career-maturity-test',
    }
  )
);