import { useList } from "../components/stateProvider";

export const initialWeatherFetch = async () => {
  const { setError, setWeather, setLoading } = useList();
  try {
    const response = await axios.request(reqFunc("accra"));
    setWeather(response.data);
    console.log(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
};
