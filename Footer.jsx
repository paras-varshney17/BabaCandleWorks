import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
export default function Footer(){
    return(
        <div className="border-t border-primary text-text font-semibold flex flex-col lg:flex-row justify-evenly items-center h-24 w-full text-md lg:text-lg xl:text-2xl mt-12">
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
    );
}
