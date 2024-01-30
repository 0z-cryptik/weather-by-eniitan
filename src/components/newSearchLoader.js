import { NavBar } from "./navbar";
import { Search } from "./search";
import { Loader } from "./loader";

export const NewSearchLoader = () => (
  <div className="bg-[#395E66] h-[100vh] w-[100vw] text-white pb-8 overflow-hidden">
    <center>
      <NavBar />
      <Search />
      <div className="w-[100vw] h-[75.2vh] flex">
        <Loader />
      </div>
    </center>
  </div>
);
