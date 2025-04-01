import { Occupation } from "./types";
import { OccupationsContent } from "./occupations-content";

async function getOccupations(): Promise<Occupation[]> {
  // In a real application, this would be a direct data fetch using a database client
  // or an API call that runs on the server
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_DOMAIN || ""}/api/occupations-redis`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch occupations");
  }

  return response.json();
}

export default async function OccupationsListServer({
  browseBy = "all",
}: {
  browseBy?: string;
}) {
  // Fetch data server-side
  const occupations = await getOccupations();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      <OccupationsContent occupations={occupations} browseBy={browseBy} />
      {/* <OccupationsContent occupations={occupations} /> */}
    </div>
  );
}
