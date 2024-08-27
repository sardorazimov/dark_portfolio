'use client'
import acmeLogo from "@/public/assets/images/acme.png";
import quantumLogo from "@/public/assets/images/quantum.png";
import echoLogo from "@/public/assets/images/echo.png";
import celestialLogo from "@/public/assets/images/celestial.png";
import pulseLogo from "@/public/assets/images/pulse.png";
import apexLogo from "@/public/assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = ({
 
}:{

}) => {
  return (
    <section className="mt-8 py-16 sm:py-24 ">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Animated Logo Styles Linear Gradient
        </h2>
        <div className="overflow-hidden mt-9 before:contents-[' '] 
          after:contents-[' '] before:absolute after:h-full before:w-20 after:w-80
          relative before:top-0 after:top-0 after:right-0 before:left-0
          before:bg-[linear-gradinet(to_right,#000,rgb(0,0,0,0))]
          after:bg-[linear-gradinet(to_right,#000,rgb(0,0,0,0))]
        ">
         <div className="flex gap-16">
         {images.map((imageSrc) => (
           <Image
            
            src={imageSrc.src}
            alt={imageSrc.alt}
            className="flex-none h-8 w-auto"
            />
         ))}
        </div>
        </div>
      </div>
    </section>
  );
};
