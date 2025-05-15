import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import Card from './Card';
import Button from './Button';
import { useTestStore } from '../../lib/Maturity-Test/testStore';
import { QUESTIONS } from '../../lib/Maturity-Test/constants';
import toast, { Toaster } from 'react-hot-toast'; 

const QuestionnaireForm: React.FC = () => {
  const router = useRouter();
  const responses = useTestStore(state => state.responses);
  const setResponse = useTestStore(state => state.setResponse);
  const calculateResults = useTestStore(state => state.calculateResults);
  const setStage = useTestStore(state => state.setStage);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const questionsPerPage = 8;
  const totalPages = Math.ceil(QUESTIONS.length / questionsPerPage);
  
  useEffect(() => {
    const allQuestionsAnswered = QUESTIONS.every((_, index) => 
      responses[index + 1] !== undefined
    );
    
    setIsFormComplete(allQuestionsAnswered);
  }, [responses]);
  
  const handleResponseChange = (questionNumber: number, response: 'Agree' | 'Disagree') => {
    // If the same response is clicked again, unselect it
    if (responses[questionNumber] === response) {
      setResponse(questionNumber, undefined); // Unset the response
    } else {
      setResponse(questionNumber, response); // Set to new response
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormComplete) {
      calculateResults();
      setStage('results'); // Change directly to results stage
      // Redirect to results page after questionnaire
      router.push('/Maturity-Test/results');
    } else {
      alert('Please answer all questions before submitting.');
    }
  };
  
  // Calculate the correct start and end indices for questions on the current page
  const getPageQuestions = (page: number) => {
    const startQuestionIndex = (page - 1) * questionsPerPage;
    const endQuestionIndex = Math.min(startQuestionIndex + questionsPerPage, QUESTIONS.length);
    return QUESTIONS.slice(startQuestionIndex, endQuestionIndex);
  };
  
  // Check if all questions on the current page are answered
  const areCurrentPageQuestionsAnswered = () => {
    const currentQuestions = getPageQuestions(currentPage);
    return currentQuestions.every((_, index) => {
      const questionNumber = (currentPage - 1) * questionsPerPage + index + 1;
      return responses[questionNumber] !== undefined;
    });
  };
  
  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any form submission
    
    // Check if all questions on the current page are answered
    if (areCurrentPageQuestionsAnswered()) {
      if (currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
      }
    } else {
      // Show toast notification when not all questions are answered
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-xs w-full pointer-events-auto rounded-lg shadow-lg`}
            style={{
              backgroundColor: '#00B24B',
              color: '#fff',
              transform: t.visible ? 'translateX(0)' : 'translateX(120%)',
              transition: 'transform 0.1s ease-in-out',
              borderRadius: '0.75rem',
              padding: '0.75rem 1rem'
            }}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">
                  Please answer all questions before proceeding
                </p>
              </div>
            </div>
          </div>
        ),
        {
          duration: 1000,
          position: 'top-right',
        }
      );
    }
  };
  
  const handlePreviousPage = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any form submission
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  // Get current questions based on page
  const currentQuestions = getPageQuestions(currentPage);
  
  return (
    <Card>
      {/* Add Toaster component for notifications */}
      <Toaster position="top-right" />
      
      <h2 className="text-2xl font-semibold mb-6 " style={{ color: '#00B24B' }}>Career Maturity Inventory</h2>
      <p className="mb-6 text-gray-700">
        There are 24 statements about choosing the kind of job or work that you will
        probably do when you finish school. Read each statement and select whether you agree or disagree.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {currentQuestions.map((question, index) => {
            const questionNumber = (currentPage - 1) * questionsPerPage + index + 1;
            return (
              <div key={questionNumber} className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <p className="mb-4 font-medium text-gray-800">
                  {questionNumber}. {question}
                </p>
                <div className="flex space-x-3 mt-2">
                  <button
                    type="button"
                    onClick={() => handleResponseChange(questionNumber, 'Agree')}
                    className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 flex-1 ${
                      responses[questionNumber] === 'Agree'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Agree
                  </button>
                  <button
                    type="button"
                    onClick={() => handleResponseChange(questionNumber, 'Disagree')}
                    className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 flex-1 ${
                      responses[questionNumber] === 'Disagree'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Disagree
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        
        <div className="flex justify-between mt-6">
          <div>
            {currentPage > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handlePreviousPage}
                className="border border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                Previous
              </Button>
            ) : (
              <div></div> // Empty div to maintain layout
            )}
          </div>
          <div>
            {currentPage < totalPages ? (
              <Button 
                type="button"
                onClick={handleNextPage}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete 
                    ? 'bg-gradient-to-r from-blue-600 to-[#00B24B] text-white hover:shadow-lg' 
                    : 'opacity-50 cursor-not-allowed bg-gray-300'
                } transition-all duration-300`}
              >
                Submit Test
              </Button>
            )}
          </div>
        </div>
      </form>
    </Card>
  );
};

export default QuestionnaireForm;