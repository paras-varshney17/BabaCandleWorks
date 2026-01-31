import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
export default function Footer(){
    return(
        <div className="border-t border-primary text-text font-semibold  h-24 w-full text-md lg:text-lg xl:text-2xl mt-12 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:gap-20">
            <div className="flex gap-2">
                <p>Copyright </p>
                <RiCopyrightLine />
                <p> 2026</p>
            </div>
            <div className="flex gap-4">
                <p>Baba Candle Works , Hathras </p>
                <span>|</span>
                <p>All rights reserved</p>
            </div>
        </div>
            <div>Powered by PV17</div>
        </div>
    );
}
