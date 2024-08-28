'use client'

import { images } from "@/types/logotriker";
import Image from "next/image";



export const LogoTicker = ({
 
}:{

}) => {
  return (
    <div className="mt-8 py-16 sm:py-24 ">
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
           {images.map((img, index) => (
            <Image 
             key={index}
             src={img.src}
             alt={img.alt}
             className="h-11 w-auto flex-none"
            />
           ))}
        </div>
        </div>
      </div>
    </div>
  );
};
