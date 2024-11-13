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
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-screen">
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 text-7xl">
          <span className="">seeWho</span>
        </div>
        <div className="flex justify-center items-center gap-10 mt-8">
          <button 
            onClick={() => handleNavigation("/notFollowedBack")}
            className="px-6"
          >
            Followers who don't follow you back
          </button>
          <button 
            onClick={() => handleNavigation("/pendingReq")}
            className="px-6"
          >
            Pending follow requests
          </button>
          <button 
            onClick={() => handleNavigation("/notFollowing")}
            className="px-6"
          >
            Followers you don't follow back
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
