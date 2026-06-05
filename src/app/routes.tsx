import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Research } from "./pages/Research";
import { Innovation } from "./pages/Innovation";
import { Education } from "./pages/Education";
import { Sustainability } from "./pages/Sustainability";
import { SDGExpo } from "./pages/SDGExpo";
import { Publications } from "./pages/Publications";
import { People } from "./pages/People";
import { ClimateAdaptation } from "./pages/research/ClimateAdaptation";
import { ClimateFoodHealth } from "./pages/research/ClimateFoodHealth";
import { ClimateAMR } from "./pages/research/ClimateAMR";
import { AIClimate } from "./pages/research/AIClimate";
import { EHUSS } from "./pages/research/EHUSS";
import { ClimatePolicy } from "./pages/research/ClimatePolicy";
import { EnergyMobility } from "./pages/research/EnergyMobility";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "research", Component: Research },
      { path: "research/climate-adaptation", Component: ClimateAdaptation },
      { path: "research/climate-food-health", Component: ClimateFoodHealth },
      { path: "research/climate-amr", Component: ClimateAMR },
      { path: "research/ai-climate", Component: AIClimate },
      { path: "research/ehuss", Component: EHUSS },
      { path: "research/climate-policy", Component: ClimatePolicy },
      { path: "research/energy-mobility", Component: EnergyMobility },
      { path: "people", Component: People },
      { path: "publications", Component: Publications },
      { path: "innovation", Component: Innovation },
      { path: "education", Component: Education },
      { path: "sustainability", Component: Sustainability },
      { path: "sdg-expo", Component: SDGExpo },
    ],
  },
]);
