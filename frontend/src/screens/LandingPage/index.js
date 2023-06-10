import { Fragment } from "react";

import LandingNavbar from "../../components/LandingNavbar";
import LandingMain from "../../components/LandingMain";
import LandingEvents from "../../components/LandingEvents";
import LandingTeams from "../../components/LandingTeams";
import LandingPlayers from "../../components/LandingPlayers";
import LandingFooter from "../../components/LandingFooter";

export default function LandingPageScreen() {
  return (
    <Fragment>
      <LandingNavbar />
      <LandingMain />
      <LandingEvents />
      <LandingTeams />
      <LandingPlayers />
      <LandingFooter />
    </Fragment>
  );
}
