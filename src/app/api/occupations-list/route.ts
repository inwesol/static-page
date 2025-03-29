import { createPool } from "@vercel/postgres";
import { NextResponse } from "next/server";

const pool = createPool({
  connectionString: process.env.NEON_DB_URL,
});

async function fetchOccupations() {
  try {
    const { rows, rowCount } =
      await pool.sql`select * from occupation_data od order by title`;

    return { rows };
  } catch (error) {
    console.log({ queryError: error });
    throw error;
  }
}

export async function GET(request: Request) {
  try {
    const { rows } = await fetchOccupations();

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Error fetching occupation data" },
      { status: 500 }
    );
  }
}
