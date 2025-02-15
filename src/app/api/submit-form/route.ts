import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Load your service account key JSON file
// import serviceAccount from './gsheet-serv-acc-cred.json';

// Create a new JWT client using the service account
const jwtClient = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function appendToSheet(sheetId: string, range: string, values: any[]) {
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });
  
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });
    
    console.log('Data appended successfully');
    return response.data;
  } catch (err) {
    console.error('Error appending data to sheet:', err);
    throw err;
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  const sheetId = process.env.GOOGLE_SHEET_ID as string;
  const range = 'Sheet1!A:A';  // Adjust based on your sheet structure
  const values = [email];

  try {
    await appendToSheet(sheetId, range, values);
    return NextResponse.json({ message: 'Form data saved successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving form data' }, { status: 500 });
  }
}