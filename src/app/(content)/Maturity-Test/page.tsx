'use client';  // Mark as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation';  

import Layout from '../../../components/Maturity-Test/Layout';
import Card from '../../../components/Maturity-Test/Card';
import Button from '../../../components/Maturity-Test/Button';
import { useTestStore } from '../../../lib/Maturity-Test/testStore';


const HomePage = () => {
  const router = useRouter();
  const setStage = useTestStore(state => state.setStage);
  
  const handleStartTest = () => {
    setStage('questionnaire');
    router.push('/Maturity-Test/questionnaire');
  };
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Card className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-lg -mx-6 -mt-6 mb-6">
            <h1 className="text-3xl font-bold">Career Maturity Test</h1>
            <p className="text-lg mt-2 opacity-90">
              Discover your readiness for making career decisions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">What is Career Maturity?</h2>
            <p className="mb-4 text-gray-700">
              Career maturity refers to your readiness to make informed career decisions based on awareness, 
              information-seeking, confidence, and effective use of resources.
            </p>
            <p className="text-gray-700">
              This test measures four key components: Concern, Curiosity, Confidence, and Consultation.
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-500 p-3 rounded-full mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">24 Simple Questions</h3>
                <p className="text-gray-600">Answer agree/disagree to statements about your career planning approach.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-500 p-3 rounded-full mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Instant Results</h3>
                <p className="text-gray-600">Get immediate feedback on your career maturity profile.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-500 p-3 rounded-full mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Downloadable Report</h3>
                <p className="text-gray-600">Save or email your results for future reference and career planning.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6 bg-blue-50 py-3 px-4 rounded-lg inline-block">
            <p className="font-medium text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Completing this test takes approximately 5-10 minutes
            </p>
          </div>
          
          <Button 
            onClick={handleStartTest} 
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            style={{borderRadius: '0.75rem'}}
          >
            Start Career Maturity Test
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default HomePage;