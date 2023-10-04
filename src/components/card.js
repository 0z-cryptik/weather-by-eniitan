import { useState } from "react";
import { ProgressBar } from "ms-react-progress-bar";
import 'ms-react-progress-bar/dist/ProgressBar.css'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import { GiWhirlwind } from "react-icons/gi";
import { IoThermometer, IoWaterSharp } from "react-icons/io5";
import { useList } from "./stateProvider";

export const Card = ({time, src, condition, deg, cor, windSpeed, realFeel, humidity}) => {

    const { fahrenheit } = useList()
    const [openMore, setOpenMore] = useState(false)

    const barStyle = {
        height: "22px",
        borderRadius: "20px",
        labelSize: "12px",
        barColor: "rgb(59 130 246)",
        containerColor: "#dddddd",
        labelAlignment: "right"
    };

    const phoneBarStyle = {
        height: "15px",
        borderRadius: "20px",
        labelSize: "9px",
        barColor: "rgb(59 130 246)",
        containerColor: "#dddddd",
        labelAlignment: "right"
    }

    return <div className={`transition-[max-height] duration-200 ease-in ${openMore ? 'lg:max-h-[18rem] max-h-[9rem]' : 'lg:max-h-[12.3rem] max-h-[6rem]'} w-full relative border mt-2 text-center bg-[#004346] text-white rounded-xl  overflow-hidden lg:pt-8 pt-2`}>
        <div className={`flex flex-row ${openMore ? 'pb-3' : 'pb-5'}`}>
            <p className="lg:text-xl text-lg font-bold w-1/4 my-auto">{time}</p>
            <div className="flex flex-col w-1/4">
                <img src={src} className="w-[40%] mx-auto" />
                <p className="lg:text-sm hidden lg:block text-xs">{condition}</p>
                <p className="lg:mt-2 lg:text-xl text-lg">
                    {deg}º{`${fahrenheit ? 'F' : 'c'}`}
                </p>
            </div>
            <div className="flex-grow hidden lg:block my-auto ml-3">
                <p className="text-left lg:text-base ml-3">chance of rain:</p>
                <ProgressBar value={cor} options={barStyle} />
            </div>

            <div className="flex-grow block lg:hidden my-auto ml-3">
                <p className="text-left text-xs ml-3">chance of rain:</p>
                <ProgressBar value={cor} options={phoneBarStyle} />
            </div>
        </div>

        <BsChevronDoubleDown id="arrows" onClick={() => setOpenMore(!openMore)} className={`cursor-pointer absolute lg:bottom-3 bottom-2 lg:left-[49%] lg:right-[49%] lg:w-[2%] w-[3.5%] left-[48.25%] ${openMore ? 'rotate-180' : 'z-10'}`} />

        <div id="extra" className={`flex flex-row mb-10 ${openMore ? '' : 'opacity-0'}`}>
            <span className="w-1/3 flex flex-col lg:block text-center text-xs lg:text-base">
                <span className="order-2">
                    <GiWhirlwind className="inline mr-1"/>
                    Wind speed
                    <span className="hidden lg:inline mr-1">
                        :
                    </span>
                </span>
                <span className="order-1">
                    {windSpeed}km/h
                </span>
            </span>

            <span className="w-1/3 flex flex-col lg:block text-center text-xs lg:text-base">
                <span className="order-2">
                    <IoThermometer className="inline" />
                    Real-feel
                    <span className="hidden lg:inline mr-1">
                        :
                    </span>
                </span>
                <span className="order-1">
                    {realFeel}º{`${fahrenheit ? 'F' : 'c'}`}
                </span>
            </span>

            <span className="w-1/3 flex flex-col lg:block text-center text-xs lg:text-base">
                <span className="order-2">
                    <IoWaterSharp className="inline" />
                    Humidity
                    <span className="hidden lg:inline mr-1">
                        :
                    </span>
                </span>
                <span className="order-1">
                    {humidity}%
                </span>
            </span>
        </div>
    </div>
}