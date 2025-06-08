import { NextResponse } from "next/server";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

// Load your service account key JSON file
// import serviceAccount from './gsheet-serv-acc-cred.json';

// Create a new JWT client using the service account
const jwtClient = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendToSheet(sheetId: string, range: string, values: any[]) {
  const sheets = google.sheets({ version: "v4", auth: jwtClient });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });

    console.log("Data appended successfully");
    return response.data;
  } catch (err) {
    console.error("Error appending data to sheet:", err);
    throw err;
  }
}

export async function POST(request: Request) {
  // Get the URL to extract query parameters
  const url = new URL(request.url);
  const formType = url.searchParams.get("for");

  const body = await request.json();

  // Handle different form types
  if (formType === "contact-us") {
    const { email, firstName, lastName, message, phone = "", subject } = body;

    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    const range = "Contact-Us!A:G"; // Using Sheet2 with columns A through G
    const timestamp = new Date().toISOString();
    const values = [
      timestamp,
      email,
      firstName,
      lastName,
      subject,
      message,
      phone,
    ];

    try {
      await appendToSheet(sheetId, range, values);
      return NextResponse.json(
        { message: "Contact form data saved successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving contact form data:", error);
      return NextResponse.json(
        { message: "Error saving contact form data" },
        { status: 500 }
      );
    }
  } else if (formType === "webinar-registration") {
    const { email, fullName, phone, occupation, company, specialRequirements } =
      body;

    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    const range = "Webinar-List!A:G"; // Using Sheet2 with columns A through G
    const timestamp = new Date().toISOString();
    const values = [
      timestamp,
      email,
      fullName,
      phone,
      occupation,
      company,
      specialRequirements,
    ];

    try {
      await appendToSheet(sheetId, range, values);
      return NextResponse.json(
        { message: "Webinar registration form data saved successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving webinar registration form data:", error);
      return NextResponse.json(
        { message: "Error saving webinar registration form data" },
        { status: 500 }
      );
    }
  } else if (formType === "career-test") {
    // const { email, fullName, gender, age, phoneNumber, categoryScores } = body;
    const { email, fullName, gender, age, phoneNumber, Concern,Curiosity,Consultation,Confidence } = body;

    // console.log("Received data:", {
    //   email,
    //   fullName,
    //   gender,
    //   age,
    //   phoneNumber,
    //   Concern,
    // });

    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    const range = "Career-Test-Results!A:J"; // Add a row number
    const timestamp = new Date().toISOString();

    const values = [
      timestamp,
      email,
      fullName,
      gender,
      age?.toString() || "",
      phoneNumber || "",
      // JSON.stringify(categoryScores),
      Concern,
      Curiosity,
      Consultation,
      Confidence
    ];

    // console.log("Appending values:", values);

    try {
      await appendToSheet(sheetId, range, values);
      return NextResponse.json(
        { message: "Career test data saved successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving career test data:", error);
      return NextResponse.json(
        { message: "Error saving career test data: " + (error instanceof Error ? error.message : 'Unknown error') },
        { status: 500 }
      );
    }
  } else {
    // Original email-only form logic
    const { email } = body;

    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    const range = "Notify-Me!A:A";
    const values = [email];

    try {
      await appendToSheet(sheetId, range, values);
      return NextResponse.json(
        { message: "Form data saved successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error saving form data:", error);
      return NextResponse.json(
        { message: "Error saving form data" },
        { status: 500 }
      );
    }
  }
}
