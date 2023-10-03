import { useList } from "./stateProvider";
import { F1Forecast, F2Forecast, F3Forecast, F4Forecast, F5Forecast, Other } from "./TFHandler";

export const TodayF = () => {

    const { hour } = useList()

    if (hour >= 14 && hour < 19) return <F5Forecast />

    if (hour == 19) return <F4Forecast />

    if (hour == 20) return <F3Forecast />

    if (hour == 21) return <F2Forecast />

    if (hour == 22) return <F1Forecast />

    if (hour == 23) return <div className="hidden"></div>

    return <Other />
}