import { initialWeatherFetch } from "./initialWeatherFetch";
import { useList } from "../hooks/stateProvider";
import { reqFunc } from "./requestHandler";

export const success = (position) => {
  const { setError, setWeather, setLoading } = useList();
  setLoading(true);
  let locationFetch = async () => {
    const location = `${position.coords.latitude},${position.coords.longitude}`;
    try {
      const response = await axios.request(reqFunc(location));
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  locationFetch();
};

export const fail = () => {
  initialWeatherFetch();
};
