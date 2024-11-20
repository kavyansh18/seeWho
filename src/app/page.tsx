'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 
import "./index.css";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-screen lg:pt-24 pt-40">

        <motion.div
          className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-[80px] lg:text-[100px] font-semibold"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}   
          transition={{ duration: 0.6 }}    
        >
          <span className="">seeWho</span>
        </motion.div>
        <motion.div
          className="relative bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent text-[20px] lg:text-[30px] font-semibold lg:pb-20 pb-12 px-11"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}   
          transition={{ duration: 0.6 }}    
        >
          <p className="">Followers Truths Without Compromising Your Security</p>
        </motion.div>
        
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-8 gap-3 lg:mt-3 mt-2">
          
          <motion.button
            onClick={() => handleNavigation("/notFollowedBack")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }} 
          >
            Followers who don't follow you back
          </motion.button>

          <motion.button
            onClick={() => handleNavigation("/pendingReq")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pending follow requests
          </motion.button>

          <motion.button
            onClick={() => handleNavigation("/notFollowing")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Followers you don't follow back
          </motion.button>

          <motion.button
            onClick={() => handleNavigation("/recentlyUnfollowed")}
            className="px-6 button1 w-full lg:w-fit text-semibold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Followers you recently unfollowed
          </motion.button>

        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
