import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
