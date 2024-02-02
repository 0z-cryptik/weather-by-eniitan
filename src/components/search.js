import { FaSearch } from "react-icons/fa";
import { useList } from "../hooks/stateProvider";
import { useRef } from "react";
import axios from "axios";
import { reqFunc } from "../functions/requestHandler";

export const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    setWeather,
    setLoading,
    setError,
    setActiveCategory
  } = useList();

  const text = useRef();

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setActiveCategory("");
    text.current.blur();

    try {
      const response = await axios.request(reqFunc(searchTerm));
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const onSearchchange = (e) => setSearchTerm(e.target.value);

  return (
    <form
      onSubmit={onSearchSubmit}
      className="lg:w-1/2 w-[70%] h-[3rem] border border-white pl-3 pr-3 lg:pr-0 min-[100px]:max-md:mt-4">
      <input
        ref={text}
        type="text"
        value={searchTerm}
        placeholder="search for a city"
        onChange={onSearchchange}
        className="w-[90%] h-[90%] focus:outline-none bg-transparent"
      />

      <button
        type="submit"
        className="h-full w-[10%]">
        <FaSearch className="mx-auto" />
      </button>
    </form>
  );
};
