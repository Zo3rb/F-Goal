import { Route, Routes } from "react-router-dom";

import LandingPageScreen from "./screens/LandingPage";
import HomePage from "./screens/HomePage";
import BlogsPage from "./screens/BlogsPage";
import TeamsPage from "./screens/TeamsPage";
import PlayersPage from "./screens/PlayersPage";
import NotFound from "./screens/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPageScreen />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/blogs" element={<BlogsPage />} />
      <Route exact path="/teams" element={<TeamsPage />} />
      <Route exact path="/players" element={<PlayersPage />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}
