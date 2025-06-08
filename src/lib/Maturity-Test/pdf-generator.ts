import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { PersonalInfo, TestResults } from './types';
import {
  CONCERN_DESCRIPTION,
  CURIOSITY_DESCRIPTION,
  CONFIDENCE_DESCRIPTION,
  CONSULTATION_DESCRIPTION,
  INTERPRETATION_GUIDELINE,
  INTERPRETATION_GUIDELINE1
} from './constants';
import { formatPercentage } from './utils';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generatePDF = (personalInfo: PersonalInfo, results: TestResults): Promise<Blob> => {
  return new Promise((resolve) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Career Maturity Test Results', 105, 20, { align: 'center' });

    // Personal Info Section
    doc.setFontSize(16);
    doc.text('Personal Information', 20, 40);

    doc.setFontSize(12);
    doc.text(`Name: ${personalInfo.name}`, 20, 50);
    doc.text(`Age: ${personalInfo.age}`, 20, 60);
    doc.text(`Gender: ${personalInfo.gender}`, 20, 70);
    doc.text(`Email: ${personalInfo.email}`, 20, 80);
    if (personalInfo.phone) {
      doc.text(`Phone: ${personalInfo.phone}`, 20, 90);
    }

    // Interpretation Guidelines Section
    doc.setFontSize(16);
    doc.text('Interpretation Guidelines', 20, 110);

    const splitGuidelines = doc.splitTextToSize(INTERPRETATION_GUIDELINE1, 210);
    doc.setFontSize(12);
    doc.text(splitGuidelines, 20, 120);

    // Results Section
    doc.addPage();
    doc.setFontSize(16);
    doc.text('Test Results', 105, 20, { align: 'center' });

    const barHeight = 3;
    const maxBarWidth = 80;
    const spaceBetween = 30;

    doc.setFillColor(70, 130, 180); // Steel blue

    let yPosition = 40;

    // Concern
    doc.setFontSize(12);
    doc.text('Concern:', 20, yPosition);
    const concernY = yPosition - 3;
    doc.rect(70, concernY, maxBarWidth * results.concern / 100, barHeight, 'F');
    doc.text(formatPercentage(results.concern), 170, concernY + 3, { align: 'right' });

    const splitConcern = doc.splitTextToSize(CONCERN_DESCRIPTION, 170);
    doc.setFontSize(10);
    doc.text(splitConcern, 20, yPosition + 10);

    yPosition += splitConcern.length * 5 + spaceBetween;

    // Curiosity
    doc.setFontSize(12);
    doc.text('Curiosity:', 20, yPosition);
    const curiosityY = yPosition - 3;
    doc.rect(70, curiosityY, maxBarWidth * results.curiosity / 100, barHeight, 'F');
    doc.text(formatPercentage(results.curiosity), 170, curiosityY + 3, { align: 'right' });

    const splitCuriosity = doc.splitTextToSize(CURIOSITY_DESCRIPTION, 170);
    doc.setFontSize(10);
    doc.text(splitCuriosity, 20, yPosition + 10);

    yPosition += splitCuriosity.length * 5 + spaceBetween;

    // Confidence
    doc.setFontSize(12);
    doc.text('Confidence:', 20, yPosition);
    const confidenceY = yPosition - 3;
    doc.rect(70, confidenceY, maxBarWidth * results.confidence / 100, barHeight, 'F');
    doc.text(formatPercentage(results.confidence), 170, confidenceY + 3, { align: 'right' });

    const splitConfidence = doc.splitTextToSize(CONFIDENCE_DESCRIPTION, 170);
    doc.setFontSize(10);
    doc.text(splitConfidence, 20, yPosition + 10);

    yPosition += splitConfidence.length * 5 + spaceBetween;

    // Add new page if needed
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 40;
    }

    // Consultation
    doc.setFontSize(12);
    doc.text('Consultation:', 20, yPosition);
    const consultationY = yPosition - 3;
    doc.rect(70, consultationY, maxBarWidth * results.consultation / 100, barHeight, 'F');
    doc.text(formatPercentage(results.consultation), 170, consultationY + 3, { align: 'right' });

    const splitConsultation = doc.splitTextToSize(CONSULTATION_DESCRIPTION, 170);
    doc.setFontSize(10);
    doc.text(splitConsultation, 20, yPosition + 10);

    // Output PDF
    const pdfBlob = doc.output('blob');
    resolve(pdfBlob);
  });
};
