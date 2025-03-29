import { createPool, QueryResultRow } from "@vercel/postgres";
import { NextResponse } from "next/server";

const pool = createPool({
  connectionString: process.env.NEON_DB_URL,
});

async function getTasksRequired(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select task_id, task_type, task from task_statements ts where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getSkillsRequired(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select * from technology_skills ts where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getSkillsTitleAndExample(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select ur.commodity_title, tu.example from tools_used tu inner join unspsc_reference ur on tu.commodity_code = ur.commodity_code where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getAllToolsUsed(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select * from tools_used tu where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getToolsUsedTitleAndExample(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select ur.commodity_title, tu.example from tools_used tu inner join unspsc_reference ur on tu.commodity_code = ur.commodity_code where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getDetailedWorkActivities(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select dr.dwa_title from tasks_to_dwas ttd inner join dwa_reference dr on ttd.dwa_id=dr.dwa_id where onetsoc_code = ${id}`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getInterestDetails(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select cmr.element_name, cmr.description, i.data_value from interests i inner join content_model_reference cmr on i.element_id=cmr.element_id where onetsoc_code = ${id} and i.scale_id = 'OI';`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getRelatedOccupations(id: string) {
  try {
    const { rows, rowCount } =
      await pool.sql`select ro.onetsoc_code, ro.related_onetsoc_code, ro.relatedness_tier, ro.related_index, od.title from related_occupations ro inner join occupation_data od on ro.related_onetsoc_code = od.onetsoc_code where ro.onetsoc_code = ${id} and ro.relatedness_tier = 'Primary-Short';`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

async function getAlternateTitles(id: string) {
  try {
    const { rows } =
      await pool.sql`select alternate_title from alternate_titles at2 where onetsoc_code = ${id};`;

    return rows;
  } catch (error) {
    console.log({ queryError: error });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Extract id from the query parameter

    const dataToFetch = searchParams.get("data");

    if (!id || !dataToFetch) {
      return NextResponse.json(
        { message: "ID or data is required" },
        { status: 400 }
      );
    }

    const functionsMapper = {
      tasks: getTasksRequired,
      skills: getSkillsRequired,
      skillsTitle: getSkillsTitleAndExample,
      tools: getAllToolsUsed,
      toolsTitle: getToolsUsedTitleAndExample,
      work: getDetailedWorkActivities,
      interest: getInterestDetails,
      occupation: getRelatedOccupations,
      alternateTitles: getAlternateTitles,
    } as Record<string, (id: string) => Promise<QueryResultRow[] | undefined>>;

    if (!functionsMapper[dataToFetch]) {
      return NextResponse.json(
        { message: "Data is required" },
        { status: 400 }
      );
    }

    const data = await functionsMapper[dataToFetch](id);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Error fetching occupation data" },
      { status: 500 }
    );
  }
}
