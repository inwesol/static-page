import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from './Card';
import Button from './Button';
import { useTestStore } from '../../lib/Maturity-Test/testStore';
import { formatPercentage } from '../../lib/Maturity-Test/utils';
import { 
  CONCERN_DESCRIPTION,
  CURIOSITY_DESCRIPTION,
  CONFIDENCE_DESCRIPTION,
  CONSULTATION_DESCRIPTION,
  INTERPRETATION_GUIDELINE
} from '../../lib/Maturity-Test/constants';
import { generatePDF } from '../../lib/Maturity-Test/pdf-generator';

const ResultsDisplay = () => {
  const router = useRouter();
  const personalInfo = useTestStore(state => state.personalInfo);
  const results = useTestStore(state => state.results);
  const resetTest = useTestStore(state => state.resetTest);
  const [isEmailing, setIsEmailing] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  if (!personalInfo || !results) {
    return (
      <Card className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-lg -mx-6 -mt-6 mb-6">
          <h2 className="text-2xl font-semibold">No Results Available</h2>
        </div>
        <p className="mb-6">You need to complete the test to see your results.</p>
        <Button 
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium px-6 py-2 rounded-lg shadow hover:shadow-lg transition-all"
        >
          Start Test
        </Button>
      </Card>
    );
  }
  
  const handleDownloadPDF = async () => {
    try {
      const pdfBlob = await generatePDF(personalInfo, results);
      const url = URL.createObjectURL(pdfBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${personalInfo.name.replace(/\s+/g, '_')}_career_maturity_results.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
  
  const handleEmailReport = async () => {
    if (!personalInfo.email) {
      alert('Email address is required to send the report.');
      return;
    }
    
    setIsEmailing(true);
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalInfo,
          results
        }),
      });
      
      if (response.ok) {
        setEmailSent(true);
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again or download instead.');
    } finally {
      setIsEmailing(false);
    }
  };
  
  const handleStartNewTest = () => {
    resetTest();
    router.push('/Maturity-Test');
  };
  
  // Render trait result card
  const TraitResult = ({ 
    title, 
    score, 
    description 
  }: { 
    title: string; 
    score: number; 
    description: string;
  }) => (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <span className="font-bold text-lg text-green-600">
          {formatPercentage(score)}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          className="h-3 rounded-full bg-green-600"
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  return (
    <div className="space-y-6">
      <Card>
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-lg -mx-6 -mt-6 mb-6">
          <h2 className="text-2xl font-semibold">Your Career Maturity Results</h2>
          <p className="mt-1 opacity-90">Assessment completed on {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-end space-y-3 md:space-y-0 md:space-x-3 mb-6">
          <Button 
            variant="outline" 
            onClick={handleDownloadPDF}
            className="flex items-center justify-center border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </Button>
          
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-l-4 border-green-500 p-5 mb-8 rounded-lg">
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="text-sm text-gray-500">Name</span>
                <p className="font-medium">{personalInfo.name}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="text-sm text-gray-500">Age</span>
                <p className="font-medium">{personalInfo.age}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-sm text-gray-500">Gender</span>
                <p className="font-medium">{personalInfo.gender}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-sm text-gray-500">Email</span>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </div>
            
            {personalInfo.phone && (
              <div className="flex items-center md:col-span-2">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Phone</span>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Interpretation Guidelines</h3>
          <div className="prose max-w-none text-gray-700">
            {INTERPRETATION_GUIDELINE.split('\n').filter(line => line.trim()).map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 h-6 w-1 rounded mr-3"></span>
            Your Career Readiness Scores
          </h3>
          
          <TraitResult 
            title="Concern" 
            score={results.concern} 
            description={CONCERN_DESCRIPTION}
          />
          
          <TraitResult 
            title="Curiosity" 
            score={results.curiosity} 
            description={CURIOSITY_DESCRIPTION}
          />
          
          <TraitResult 
            title="Confidence" 
            score={results.confidence} 
            description={CONFIDENCE_DESCRIPTION}
          />
          
          <TraitResult 
            title="Consultation" 
            score={results.consultation} 
            description={CONSULTATION_DESCRIPTION}
          />
        </div>
        
        
      </Card>
      
      <div className="text-center mt-8">
        <Button 
          variant="outline" 
          onClick={handleStartNewTest}
          className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Take Test Again
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;