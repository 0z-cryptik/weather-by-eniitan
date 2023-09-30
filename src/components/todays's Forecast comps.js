import { useList } from "./stateProvider";

export const TForecast1 = () => {
    const { weather } = useList()

    return <div>
        <p>{}</p>
    </div>
}