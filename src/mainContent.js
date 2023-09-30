import { Route, Routes } from "react-router";
import App from "./App";
import { TForecast1 } from "./components/todays's Forecast comps";

export const MainCon = () => {
    return <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Today-hourly-forecast-for-10:00" element={<TForecast1 />} />
    </Routes>
}