'use client'
import React from "react";
import { useRouter } from "next/navigation";
import "./index.css";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path:string) => {
    router.push(path);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-screen lg:pt-28 pt-48">
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 text-[80px] lg:text-[100px] font-semibold">
          <span className="">seeWho</span>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-8 gap-3 lg:mt-3 mt-2">
          <button 
            onClick={() => handleNavigation("/notFollowedBack")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
          >
            Followers who don't follow you back
          </button>
          <button 
            onClick={() => handleNavigation("/pendingReq")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
          >
            Pending follow requests
          </button>
          <button 
            onClick={() => handleNavigation("/notFollowing")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
          >
            Followers you don't follow back
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
