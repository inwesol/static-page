'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../../components/Maturity-Test/Layout';
import PersonalInfoForm from '../../../../components/Maturity-Test/PersonalInfoForm';
import { useTestStore } from '../../../../lib/Maturity-Test/testStore';

const PersonalInfoPage = () => {
  const router = useRouter();
  const stage = useTestStore(state => state.stage);
  const responses = useTestStore(state => state.responses);
  
  // Check if user has completed the questionnaire
  useEffect(() => {
    // If user hasn't started the test, redirect to home
    if (stage === 'intro') {
      router.push('/Maturity-Test');
    }
    // If user hasn't completed the questionnaire, redirect to questionnaire
    else if (stage === 'questionnaire' || Object.keys(responses).length === 0) {
      router.push('/Maturity-Test/questionnaire');
    }
  }, [stage, responses, router]);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Career Maturity Test</h1>
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md bg-gray-100 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 max-w-md mx-auto">
            <span className="font-semibold text-blue-600">Personal Info</span>
            <span>Questionnaire</span>
            <span>Results</span>
          </div>
        </div>
        
        <PersonalInfoForm />
      </div>
    </Layout>
  );
};

export default PersonalInfoPage;