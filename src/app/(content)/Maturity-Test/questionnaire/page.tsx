'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../../components/Maturity-Test/Layout';
import QuestionnaireForm from '../../../../components/Maturity-Test/QuestionnaireForm';
import { useTestStore } from '../../../../lib/Maturity-Test/testStore';

const QuestionnairePage = () => {
  const router = useRouter();
  const stage = useTestStore(state => state.stage);
  
  // Redirect if user hasn't started the test
  useEffect(() => {
    if (stage === 'intro') {
      router.push('/Maturity-Test');
    }
  }, [stage, router]);
  
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
            <span className="font-semibold text-blue-600">Questionnaire</span>
            <span>Personal Info</span>
            <span>Results</span>
          </div>
        </div>
        
        <QuestionnaireForm />
        
        <div className="mt-6 text-center text-gray-600">
          <p>Respond to each statement based on how you feel about it currently. There are no right or wrong answers.</p>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionnairePage;