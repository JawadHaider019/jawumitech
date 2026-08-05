"use client";

import Image from "next/image";

export default function Partners() {
    const partnerLogos = [
        "/partner/legacy.png",
        "/partner/naturabliss.png",
        "/partner/pureclay.png",
        "/partner/campuna.png",
        "/partner/cdl school.png",
        "/partner/eternox.png",
        "/partner/fintalio.png",
        "/partner/sz.png",
        "/partner/fivup.png",
        "/partner/goodbyemama.png",
        "/partner/jocelyn.png",
        "/partner/magus.png",
        "/partner/righthire.png",
        "/partner/tx.png",
        "/partner/unitedmercy.png",
        "/partner/zola.png",
    ];

    return (
        <section className="bg-white mt-2 mb-6 py-4 overflow-hidden relative rounded-3xl border border-gray-100 mx-3 sm:mx-6">
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

            <div className="flex w-max animate-marquee py-4 gap-4 md:gap-8 pl-4 md:pl-8">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex-none w-40 h-24 sm:w-36 sm:h-24 flex items-center justify-center rounded-2xl p-2 transition-all duration-300 group"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={logo}
                                alt={`Partner ${index}`}
                                fill
                                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
