import Image from "next/image";
import appScreen from "@/public/assets/images/app-screen.png";

export const ProductShowcase = () => {
  return(
    <section className="my-16 sm:py-24">
      <div className="container">
        <h2 className="text-center sm:text-6xl text-5xl font-bold tracking-tighter">
          Product Interface
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-xl text-center text-white/70 mt-5">
          Clelebrate the joy Amsterdam Open Source Join Wek 
        </p>
        </div>
        <div className="mt-14 items-center justify-center flex border  rounded-lg border-white/60 ">
          <Image src={appScreen} alt="border " />
        </div>
      </div>
    </section>
  )
};
