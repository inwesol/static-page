import OccupationsListServer from "./occupations-list-server";

interface OccupationsListProps {
  browseBy?: string;
}

const OccupationsList = ({ browseBy }: OccupationsListProps) => {
  return <OccupationsListServer browseBy={browseBy} />;
};

export default OccupationsList;
