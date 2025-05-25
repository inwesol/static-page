// PersonalInfoOverlay.jsx - Updated with smaller, more rounded design
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { useTestStore } from '../../lib/Maturity-Test/testStore';
import { PersonalInfo } from '../../lib/Maturity-Test/types';

interface PersonalInfoOverlayProps {
  onComplete: () => void;
}

const PersonalInfoOverlay: React.FC<PersonalInfoOverlayProps> = ({ onComplete }) => {
  const setPersonalInfo = useTestStore(state => state.setPersonalInfo);
  const setStage = useTestStore(state => state.setStage);
  const storedPersonalInfo = useTestStore(state => state.personalInfo);
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const [formData, setFormData] = useState<PersonalInfo>(storedPersonalInfo || {
    name: '',
    age: 0,
    gender: 'Male',
    email: '',
    phone: ''
  } as PersonalInfo);
  
  const [errors, setErrors] = useState<Partial<Record<keyof PersonalInfo, string>>>({});
  
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PersonalInfo, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age || formData.age < 10 || formData.age > 100) {
      newErrors.age = 'Please enter a valid age between 10 and 100';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^\+?[0-9\s\-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setPersonalInfo(formData);
      setStage('results');
      
      // Call the onComplete callback to remove overlay
      if (onComplete) {
        onComplete();
      }
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <Card className="max-w-md w-full animate-fade-in-up rounded-xl shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-5 rounded-t-xl -mx-6 -mt-6 mb-6">
          <h2 className="text-xl font-semibold">Almost There!</h2>
          <p className="mt-1 opacity-90 text-sm">Enter your details to view your results</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 flex items-center text-sm">
              <span className="mr-1">Full Name</span>
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-200' : 'focus:ring-green-200'} focus:border-transparent transition-colors text-sm`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="age" className="block mb-1 font-medium text-gray-700 flex items-center text-sm">
                <span className="mr-1">Age</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border ${errors.age ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${errors.age ? 'focus:ring-red-200' : 'focus:ring-green-200'} focus:border-transparent transition-colors text-sm`}
                  placeholder="Your age"
                />
              </div>
              {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
            </div>
            
            <div>
              <label htmlFor="gender" className="block mb-1 font-medium text-gray-700 flex items-center text-sm">
                <span className="mr-1">Gender</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent appearance-none bg-white transition-colors text-sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-0 top-0 h-full flex items-center pr-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 flex items-center text-sm">
              <span className="mr-1">Email</span>
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-200' : 'focus:ring-green-200'} focus:border-transparent transition-colors text-sm`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium text-gray-700 text-sm">
              Phone Number <span className="text-gray-500 text-xs font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-200' : 'focus:ring-green-200'} focus:border-transparent transition-colors text-sm`}
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div className="pt-3 flex justify-between items-center">
            <div className="text-gray-500 text-xs">
              <span className="text-red-500">*</span> Required fields
            </div>
            <Button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all text-sm"
            >
              <span className="mr-2">View My Results</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PersonalInfoOverlay;