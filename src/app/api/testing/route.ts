import { createPool } from "@vercel/postgres";
import { NextResponse } from "next/server";

const pool = createPool({
  connectionString: process.env.DB_URL,
});

export async function runQuery() {
  try {
    const { rows, rowCount } =
      //   await pool.sql`select count(onetsoc_code) as occupation_count from occupation_data od;`;
      await pool.sql`select onetsoc_code, title, description from occupation_data od order by title limit 10;`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

export async function GET(request: Request) {
  try {
    const data = await runQuery();

    console.log({ viswa: data });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log({ error });

    return NextResponse.json(
      { message: "Error saving form data" },
      { status: 500 }
    );
  }
}
