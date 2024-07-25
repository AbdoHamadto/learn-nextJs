import Image from "next/image";
import tiger from './image/team-03.jpg'
import { lusitana, roboto } from '@/app/ui/font';

export default function Home() {
  return (
    <>
    <div className="text-red-600">how are u</div>
    <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
    <p className={`${lusitana.className} text-xl mx-auto w-fit`}>Hi how are u bro and ur frinds</p>
    <p className={`${roboto.className} text-xl mx-auto w-fit`}>Hi how are u bro and ur frinds</p>
    <p className="text-xl mx-auto w-fit">Hi how are u bro and ur frinds</p>
    <Image 
      // className="block sm:hidden"
      src={tiger}
      width={560} 
      height={620}
      alt="this is img"
    />
    </>
  );
}
