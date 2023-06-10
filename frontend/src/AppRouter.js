import { Route, Routes } from "react-router-dom";

import LandingPageScreen from "./screens/LandingPage";
import NotFound from "./screens/NotFound";

function Home() {
  return <LandingPageScreen />;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
