import Link from "next/link";
import { Button } from "../ui/button";
import ArrowIcon from '@/public/assets/icons/arrow-w.svg'
import CursorImage from '@/public/assets/images/cursor.png'
import MessageImage from '@/public/assets/images/message.png'
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mt-3 overflow-clip relative py-10 sm:py-10  bg-[linear-gradient(to_bottom,#000,#200D42_34%,#F2A_65%,#A46EDB_82%)]">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] rounded-[100%] left-1/2 -translate-x-1/2 border
       border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">

      </div>
      <div className="container relative">
        <div className="flex  items-center justify-center">
          <Link href={'/'} className="inline-flex gap-3 border py-1 px-2 mt-10 rounded-lg border-white/30">
            <span className="font-medium bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [webkit-background-clip:text]">ENV version 2.0</span>
            <span className="inline-flex items-center gap-2 ">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className=" flex justify-center mt-8">
          <div className="inline-flex  relative">
            <h1 className="text-7xl sm:text-9xl  tracking-tighter text-center  inline-flex">
              Day One One Day
            </h1>
            <h2 className="font-extrabold sm:text-9xl mt-8 text-7xl gap-2 text-center tracking-tighter ">
            </h2>
            <Image
              src={CursorImage}
              height={200} width={200}
              alt="HeroImg"
              className="absolute top-[108px] right-[476px] hidden lg:inline" />
            <Image
              src={MessageImage}
              height={200} width={200}
              alt="HeroImg"
              className="absolute top-[56px] left-[498px] hidden " />
          </div>
        </div>
        <p className="text-xl mt-8 text-center max-w-md">Legeds Never Fail Centured</p>
        <div className="mt-8 flex justify-center">
          <Button className="py-3 px-5 "> Started</Button>
        </div>
      </div>
     
    </section>
  );
};
