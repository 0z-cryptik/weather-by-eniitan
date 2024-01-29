export const reqFunc = (query) => {
  const weatherReq = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: query,
      days: "3"
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  };

  return weatherReq;
};
