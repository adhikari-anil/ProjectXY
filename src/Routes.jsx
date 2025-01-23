import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import App from "./App";
import MainLandingPage from "./component/LandingPage/MainLandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/start" element={<LandingPage />} />
      <Route path="/home" element={<App />} />
    </>
  )
);

export default router;
