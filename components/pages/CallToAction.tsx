import { Button } from "../ui/button";
import helix from '@/public/assets/images/helix2.png'
import emojiStart from '@/public/assets/images/emojistar.png'
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="py-16 sm:py-16">
      <div className="conatainer  relative"

      >
        {/* <Image src={helix} alt=""  
         className="absloute top-6 left-[calc(100%+36px)]"/>
        <Image src={emojiStart} alt=""  
         className="absloute -top-[120px]  right-[calc(100%+24px)] "/> */}
        <h2 className="font-bold text-5xl sm:text-6xl text-center tracking-tighter">
          Call Action
        </h2>
        <p className="mt-4 text-xl text-white/70 text-center">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum eligendi ullam aliquid.
        </p>
        <div className=" max-w-screen-xl mx-auto">
          <div
         style={{
          backgroundImage: `url${helix.src}`
         }}
          >
            <form className="mt-10 flex flex-col px-5 gap-3 max-w-sm mx-auto ">
            <input type="email" placeholder="youremail@gmail.com"
              className="h-12 rounded-lg px-5 "
            />
            <Button
              className="mt-1"
              type="submit">
              Get Action
            </Button>
          </form>
          </div>
        </div>

      </div>
    </section>
  );
};
