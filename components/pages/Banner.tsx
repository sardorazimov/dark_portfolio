import Link from "next/link";
import CursorImage from '@/public/assets/images/cursor.png'
import MessageImage from '@/public/assets/images/message.png'
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="py-10 md:py-10 ">
     <div className="container">
      <h1 className="font-bold text-6xl md:text-6xl text-center">Who is Much Better</h1>
      <div className="flex max-w-xl mx-auto">
        <div className="flex gap-x-10">
         <Image  src={CursorImage} alt="BAnner" height={200} width={200}/>
        <Image  src={MessageImage} alt="BAnner"/>  
        </div>
      </div>
     </div>
    </section>
    // <section className="py-3 text-center bg-neutral-400">
    //   <div className="container">
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       <span></span>
    //     </p>
    //     <Link href={'/'} className="underline underline-offset-4 font-medium ">
          
    //     </Link>
    //   </div>
    // </section>
  )
};
