import { ProgressBar } from "ms-react-progress-bar";
import "ms-react-progress-bar/dist/ProgressBar.css";

export const ChanceOfRain = ({ val }) => {
  const barstyle = (height, borderRadius, labelSize) => ({
    height,
    borderRadius,
    labelSize,
    barColor: "rgb(62,130,247)",
    containerColor: "#dddddd",
    labelAlignment: "right"
  });

  return (
    <div className="flex flex-row md:text-xl mx-auto lg:w-[50%] md:w-[60%] min-[540px]:w-[80%] w-[85%] md:mt-[3rem] mt-[1.5rem] ">
      <span className="text-sm md:text-xl ml-3">
        Chance of rain today:
      </span>

      <span className="flex-grow hidden md:block">
        <ProgressBar
          value={val}
          options={barstyle("22px", "20px", "12px")}
        />
      </span>

      <span className="flex-grow -mt-1 md:hidden">
        <ProgressBar
          value={val}
          options={barstyle("15px", "20px", "9px")}
        />
      </span>
    </div>
  );
};

/* */
