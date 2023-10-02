import { useList } from "./stateProvider";
import { ProgressBar } from "ms-react-progress-bar";
import 'ms-react-progress-bar/dist/ProgressBar.css'

export const ChanceOfRain = ({val}) => {

    const barStyle = {
        height: "22px",
        borderRadius: "20px",
        labelSize: "12px",
        barColor: "#5E49FD",
        containerColor: "#dddddd",
        labelAlignment: "right"
    };

    return <div className='flex flex-row text-xl mx-auto w-[50%] mt-[3rem]'>
        Chance of rain today: 
        <span className='flex-grow'>
            <ProgressBar value={val} options={barStyle} />
        </span>
    </div>
}

