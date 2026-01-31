import React from "react";

export default function Hero({contactref,productref}) {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-24">

      <div className="
        max-w-6xl mx-auto
        text-center">

        {/* Brand Name */}
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold
          text-text
          mb-4
        ">
          बाबा मोमबत्ती
        </h1>

        {/* Tagline */}
        <h2 className="
          text-lg sm:text-xl md:text-2xl
          font-semibold
          text-primary
          mb-6
        ">
          Trusted Candle Manufacturer for Over 20+ Years
        </h2>

        {/* Description */}
        <p className="
          max-w-3xl mx-auto
          text-base sm:text-lg
          leading-relaxed
          mb-8 text-text">

          Based in Hathras, Uttar Pradesh, Baba Candle Works has been
          delivering 100% pure paraffin , premium quality candles with reliability,
          consistency, and trust for more than two decades.

        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          <button className="
            bg-primary text-background
            px-6 py-3
            rounded-lg
            font-semibold
            hover:bg-goldHover hover:text-text
            transition cursor-pointer" onClick={()=>contactref.current.scrollIntoView({
            behavior: "smooth"
            })
            }>
            Contact Us
          </button>

          <button className="
            border border-primary
            text-primary
            px-6 py-3
            rounded-lg
            font-semibold
            hover:bg-primary hover:text-background
            transition cursor-pointer" onClick={()=>productref.current.scrollIntoView({
            behavior: "smooth"
            })
            }>
            View Products
          </button>

        </div>

      </div>

    </section>
  );
}
