import { useList } from "./stateProvider";

export const Location = () => {
  const { weather } = useList();

  return (
    <p className="text-4xl font-bold">
      {weather.location.name}, {weather.location.country}
    </p>
  );
};
