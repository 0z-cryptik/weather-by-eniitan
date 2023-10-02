import { useState } from "react";
import { ProgressBar } from "ms-react-progress-bar";
import 'ms-react-progress-bar/dist/ProgressBar.css'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import { GiWhirlwind } from "react-icons/gi";
import { IoThermometer, IoWaterSharp } from "react-icons/io5";

export const Card = ({time, src, condition, deg, cor, windSpeed, realFeel, humidity}) => {

    const [openMore, setOpenMore] = useState(false)

    const barStyle = {
        height: "22px",
        borderRadius: "20px",
        labelSize: "12px",
        barColor: "rgb(59 130 246)",
        containerColor: "#dddddd",
        labelAlignment: "right"
    };

    return <div id="card" className={`${openMore ? 'expanded' : ''} w-full relative border mt-2 text-center bg-[#004346] text-white rounded-xl pt-8`}>
        <div className={`flex flex-row ${openMore ? 'pb-3' : 'pb-5'}`}>
            <p className="text-xl font-bold w-1/4 my-auto">{time}</p>
            <div className="flex flex-col w-1/4">
                <img src={src} className="w-[30%] mx-auto" />
                <p className="text-sm">{condition}</p>
                <p className="mt-2 text-xl">{deg}ºc</p>
            </div>
            <div className="flex-grow my-auto ml-3">
                <p className="text-left ml-3">chance of rain:</p>
                <ProgressBar value={cor} options={barStyle} />
            </div>
        </div>

        <BsChevronDoubleDown id="arrows" onClick={() => setOpenMore(!openMore)} className={`cursor-pointer absolute bottom-3 left-[49%] right-[49%] w-[2%] ${openMore ? 'rotate-180' : 'z-10'}`} />

        <div id="extra" className={`flex flex-row mb-10 ${openMore ? '' : 'opacity-0'}`}>
            <span className="w-1/3 text-center">
                <GiWhirlwind className="inline mr-1"/>
                Wind speed: {windSpeed}km/h
            </span>
            <span className="w-1/3 text-center">
                <IoThermometer className="inline" />
                Real-feel: {realFeel}ºc
            </span>
            <span className="w-1/3 text-center">
                <IoWaterSharp className="inline" />
                Humidity: {humidity}%
            </span>
        </div>
    </div>
}