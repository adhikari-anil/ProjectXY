import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Home from "./component/MainContenet/Pages/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LandingPage />}>
            <Route path="/home" element={<Home />}></Route>
        </Route>
    )
)

export default router;