import React from "react";

export default function About({aboutref}){
 return(
    <section ref={aboutref} className="px-4 sm:px-6 md:px-8 py-20 mt-4" >
        <div className="w-full max-w-lg lg:max-w-5xl text-text bg-accent rounded-3xl shadow-2xl p-8 backdrop-blur mx-auto">
        <h1 className="text-center text-3xl font-bold lg:text-4xl 2xl:text-6xl mb-8 ">ABOUT US</h1>
        <p className="text-base md:text-2xl xl:text-4xl leading-relaxed text-center opacity-90">
            <h2 className="font-semibold">Baba Candle Works — Trusted for over 20+ years</h2>
            <br />
            Based in Hathras, Uttar Pradesh, Baba Candle Works has been manufacturing premium quality paraffin candles for over 20 years.
            <br /><br />
            We are committed to consistent quality, reliable supply, and long-term customer satisfaction.

          <br /><br />
        At Baba Candle Works, we believe that true success comes from trust, dedication, and excellence — making quality our true identity.
        </p>

        <p className="text-base md:text-2xl xl:text-4xl leading-relaxed text-center opacity-90 mt-12">
            <h2 className="font-semibold">बाबा कैंडल वर्क्स — 20+ वर्षों का भरोसा</h2>
        <br />
            हाथरस, उत्तर प्रदेश में स्थित बाबा कैंडल वर्क्स पिछले 20 वर्षों से उच्च गुणवत्ता वाली पैराफिन मोमबत्तियों का निर्माण कर रहा है।
            
            <br /><br />
            हमारा उद्देश्य है — समय पर आपूर्ति, उचित मूल्य, और पूर्ण ग्राहक संतुष्टि।
            <br /><br />
            गुणवत्ता, भरोसा और संतुष्टि — यही हमारी पहचान है।
        </p>

                
        </div>
    </section>
 )
}