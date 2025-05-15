// results.tsx - Updated with blur transition handling
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../../components/Maturity-Test/Layout';
import ResultsDisplay from '../../../../components/Maturity-Test/ResultsDisplay';
import PersonalInfoOverlay from '../../../../components/Maturity-Test/PersonalInfoOverlay';
import { useTestStore } from '../../../../lib/Maturity-Test/testStore';

export default function ResultsPage() {
  const router = useRouter();
  const stage = useTestStore(state => state.stage);
  const personalInfo = useTestStore(state => state.personalInfo);
  const results = useTestStore(state => state.results);
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(true);
  const [isContentRevealed, setIsContentRevealed] = useState(false);

  // Redirect if user hasn't completed the questionnaire
  useEffect(() => {
    if (stage === 'intro') {
      router.push('/Maturity-Test');
    } else if (stage === 'questionnaire' || !results) {
      router.push('/Maturity-Test/questionnaire');
    }
    
    // If personal info is already completed, don't show the form
    if (personalInfo && Object.keys(personalInfo).length > 0 && personalInfo.name) {
      setShowPersonalInfoForm(false);
      // Add a slight delay before triggering the reveal animation
      setTimeout(() => {
        setIsContentRevealed(true);
      }, 100);
    }
  }, [stage, personalInfo, results, router]);

  const onPersonalInfoComplete = () => {
    setShowPersonalInfoForm(false);
    // Add a slight delay before triggering the reveal animation
    setTimeout(() => {
      setIsContentRevealed(true);
    }, 100);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Result</h1>
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md bg-gray-100 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 max-w-md mx-auto">
            <span>Questionnaire</span>
            <span>Personal Info</span>
            <span className="font-semibold text-blue-600">Results</span>
          </div>
        </div>
        
        {/* Results section with blur effect */}
        <div className="relative">
          {showPersonalInfoForm && (
            <PersonalInfoOverlay onComplete={onPersonalInfoComplete} />
          )}
          <div 
            className={`blur-transition ${showPersonalInfoForm 
              ? 'filter blur-md pointer-events-none' 
              : isContentRevealed ? 'reveal-content' : ''}`}
          >
            <ResultsDisplay />
          </div>
        </div>
      </div>
    </Layout>
  );
}