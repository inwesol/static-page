import { createPool, QueryResultRow } from "@vercel/postgres";
import { NextResponse } from "next/server";

const pool = createPool({
  connectionString: process.env.NEON_DB_URL,
});

async function getOccupationTitleAndDescription(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select title, description from occupation_data od where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Extract id from the query parameter

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const data = await getOccupationTitleAndDescription(id);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Error fetching occupation data" },
      { status: 500 }
    );
  }
}
