// app/api/generate-pdf/route.ts
import { NextResponse } from 'next/server';
import { generatePDF } from '@/lib/Maturity-Test/pdf-generator';
import { PersonalInfo, TestResults } from '@/lib/Maturity-Test/types';

export async function POST(request: Request) {
  try {
    const { personalInfo, results } = await request.json() as {
      personalInfo: PersonalInfo;
      results: TestResults;
    };
    
    if (!personalInfo || !results) {
      return NextResponse.json(
        { message: 'Personal information and results are required' },
        { status: 400 }
      );
    }
    
    // Generate the PDF
    const pdfBlob = await generatePDF(personalInfo, results);
    
    // Return the PDF as a blob
    return new Response(pdfBlob, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${personalInfo.name.replace(/\s+/g, '_')}_career_maturity_results.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { message: 'Failed to generate PDF', error: (error as Error).message },
      { status: 500 }
    );
  }
}