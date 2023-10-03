import { useList } from "./stateProvider";
import { Card } from "./card";
import { F1Forecast, F2Forecast, F3Forecast, F4Forecast, F5Forecast, Other } from "./TFHandler";

export const TodayF = () => {

    const { weather, hour } = useList()

    const barStyle = {
        height: "22px",
        borderRadius: "20px",
        labelSize: "12px",
        barColor: "rgb(59 130 246)",
        containerColor: "#dddddd",
        labelAlignment: "right"
    };

    if (hour >= 14 && hour < 19) return <F5Forecast />

    if (hour == 19) return <F4Forecast />

    if (hour == 20) return <F3Forecast />

    if (hour == 21) return <F2Forecast />

    if (hour == 22) return <F1Forecast />

    if (hour == 23) return <div className="hidden"></div>

    return <Other />
}