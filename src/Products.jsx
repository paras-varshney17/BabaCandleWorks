import React from "react";

export default function Products({productref}){
    return(
        <section ref={productref}  className="px-4 sm:px-6 md:px-8 py-20 mt-4" >
        <div className="w-full max-w-lg lg:max-w-5xl text-text bg-accent rounded-3xl shadow-2xl p-8 backdrop-blur mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl 2xl:text-6xl font-bold mb-8">OUR PRODUCTS </h1>
        <div className="grid grid-cols-1
          md:grid-cols-2
          gap-8">
            <div className="h-full
            flex flex-col
            border border-primary
            rounded-2xl shadow-lg
            p-6
            bg-background/70
            hover:shadow-xl
            transition">
              <img src="/designer.jpg" alt="candle-image" className=" w-full h-[70%] object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Decorative Candles
            </h2>

            <p className="flex-grow opacity-90 text-sm md:text-base">
              Premium decorative candles for homes, events, and spiritual
              purposes with long-lasting burn quality.
            </p>

          </div>

          <div className="h-full
            flex flex-col
            border border-primary
            rounded-2xl shadow-lg
            p-6
            bg-background/70
            hover:shadow-xl
            transition">
              <img src="/cd.jpg" alt="simple-candles" className="w-full h-[70%] object-cover rounded-lg mb-4"/>
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Normal Candles
            </h2>

            <p className="flex-grow opacity-90 text-sm md:text-base">
              Premium household candles designed for daily use, offering clean burning, long-lasting performance, and reliable brightness for homes, shops, and religious purposes.
            </p>

          </div>

          

          
        </div>
                
        </div>
        </section>
    );
}