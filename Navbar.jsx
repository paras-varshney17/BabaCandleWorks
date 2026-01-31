import React, { useRef } from "react";

function Navbar({scrollToAbout,scrollToContact,scrollToProducts}){
    
      
    return (
        <>
        <div className="border-primary border-b px-4 sm:px-6 md:px-8 lg:px-12 py-4 h-24 w-full flex justify-between items-center">
            <h1 className="text-text text-2xl md:text-4xl xl:text-6xl font-bold">बाबा मोमबत्ती</h1>
            <div className="flex gap-4 md:gap-10">
                <button onClick={scrollToAbout}><h2 className="text-text font-medium text-xs sm:text-md lg:text-xl cursor-pointer">About</h2></button>
                <button onClick={scrollToProducts}><h2 className="text-text font-medium text-xs sm:text-md lg:text-xl cursor-pointer ">Products</h2></button>
                <button onClick={scrollToContact}> <h2 className="text-text font-medium text-xs sm:text-md lg:text-xl cursor-pointer">Contact</h2></button>
                
            </div>
        </div>
        <div className="w-full overflow-hidden py-1 mt-3">
            <p className="text-text w-full flex gap-6 sm:gap-12 md:gap-24 2xl:gap-48 
                animate-marquee font-bold 
                py-2 sm:py-3 
                items-center whitespace-nowrap 
                text-sm sm:text-base md:text-xl xl:text-2xl">

                <span>श्री द्वारकाधीश महाराज की जय</span>    
                <span>गुणवत्ता ही हमारी पहचान है</span>  
                <span>100% pure paraffin candle</span>
            </p>
        </div>
        </>
    );
}
export default Navbar;
