"us client";

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
// Dummy data for occupations
// export const occupations: Occupation[] = [
//   {
//     title: "Software Developer",
//     code: 5,
//     interest: "I",
//     description: "Develop and maintain software applications and systems",
//     onetsoc_code: "15-1252.00",
//     category: "",
//   },
//   {
//     title: "Graphic Designer",
//     code: 4,
//     interest: "A",
//     description: "Create visual concepts using computer software or by hand",
//     onetsoc_code: "27-1024.00",
//     category: "",
//   },
//   {
//     title: "Nurse",
//     code: 6,
//     interest: "S",
//     description: "Provide and coordinate patient care and support",
//     onetsoc_code: "29-1141.00",
//     category: "",
//   },
//   {
//     title: "Accountant",
//     code: 3,
//     interest: "C",
//     description: "Prepare and examine financial records and ensure accuracy",
//     onetsoc_code: "13-2011.00",
//     category: "",
//   },
//   {
//     title: "Electrician",
//     code: 7,
//     interest: "R",
//     description: "Install, maintain, and repair electrical power and systems",
//     onetsoc_code: "47-2111.00",
//     category: "",
//   },
//   {
//     title: "Sales Manager",
//     code: 2,
//     interest: "E",
//     description: "Direct organizations' sales teams and set sales goals",
//     onetsoc_code: "11-2022.00",
//     category: "",
//   },
//   {
//     title: "Teacher",
//     code: 5,
//     interest: "S",
//     description: "Instruct students and prepare them for future education",
//     onetsoc_code: "25-2021.00",
//     category: "",
//   },
//   {
//     title: "Musician",
//     code: 4,
//     interest: "A",
//     description: "Play instruments or sing to entertain audiences",
//     onetsoc_code: "27-2042.00",
//     category: "",
//   },
//   {
//     title: "Scientist",
//     code: 6,
//     interest: "I",
//     description: "Conduct research to explore and understand natural phenomena",
//     onetsoc_code: "19-1099.00",
//     category: "",
//   },
//   {
//     title: "Clerk",
//     code: 1,
//     interest: "C",
//     description: "Perform routine clerical tasks such as filing and data entry",
//     onetsoc_code: "43-9061.00",
//     category: "",
//   },
//   {
//     title: "Marketing Director",
//     code: 5,
//     interest: "E",
//     description: "Plan and oversee advertising and promotion strategies",
//     onetsoc_code: "11-2021.00",
//     category: "",
//   },
//   {
//     title: "Carpenter",
//     code: 4,
//     interest: "R",
//     description:
//       "Construct, repair, and install building structures made from wood",
//     onetsoc_code: "47-2031.00",
//     category: "",
//   },
//   {
//     title: "Bookkeeper",
//     code: 2,
//     interest: "C",
//     description:
//       "Record financial transactions and update financial statements",
//     onetsoc_code: "43-3031.00",
//     category: "",
//   },
//   {
//     title: "Psychologist",
//     code: 6,
//     interest: "I",
//     description:
//       "Study cognitive, emotional, and social processes and behavior",
//     onetsoc_code: "19-3030.00",
//     category: "",
//   },
//   {
//     title: "Artist",
//     code: 5,
//     interest: "R",
//     description: "Create original artwork using various media and techniques",
//     onetsoc_code: "27-1013.00",
//     category: "",
//   },
//   {
//     title: "Social Worker",
//     code: 6,
//     interest: "S",
//     description:
//       "Help people solve and cope with problems in their everyday lives",
//     onetsoc_code: "21-1021.00",
//     category: "",
//   },
//   {
//     title: "Financial Advisor",
//     code: 5,
//     interest: "C",
//     description:
//       "Provide advice on investments, insurance, and retirement planning",
//     onetsoc_code: "13-2052.00",
//     category: "",
//   },
//   {
//     title: "Machinist",
//     code: 4,
//     interest: ["R", "I", "S"],
//     description: "Set up and operate machine tools to produce precision parts",
//     onetsoc_code: "51-4041.00",
//     category: "",
//   },
//   {
//     title: "Sales Representative",
//     code: 4,
//     interest: ["E", "R", "S", "A"],
//     description: "Sell products or services to businesses or consumers",
//     onetsoc_code: "41-4012.00",
//     category: "",
//   },
// ];

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
