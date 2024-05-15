"use client";
import Image from "next/image";
import starpixel from "/app/Icons/starpixel.gif";
import React from "react";
import { Timer } from "@mui/icons-material";

const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = React.useState('');

    React.useEffect(() => {
        const date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return <>{currentTime}</>;
};




export default function Home() {
  return (
    <main className="bg-black min-h-screen relative overflow-auto">
      <Image alt="Stars" src={starpixel} quality={100} fill sizes="100vw" style={{ objectFit: 'cover' }} className="Static"/>

      <div className="fixed top-5 right-5 flex space-x-4 z-50">
        <a className="transition-transform transform hover:scale-125" href="https://www.linkedin.com/in/jeron-clarke/" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
        </a>
        <a className="transition-transform transform hover:scale-125" href="https://github.com/Codeizfun" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
        </a>
        <a className="transition-transform transform hover:scale-125" href="mailto:jeronclarke09@gmail.com">
          <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" />
        </a>
      </div>

      <div className="flex justify-between items-center h-full p-8">
        <img src="https://i.imgur.com/4EHdI7v.jpeg" className="w-80 h-100 object-cover rounded-lg transition-transform transform hover:scale-110" alt="Profile" />
        <div className=" flex text-center text-white font-extrabold font-mono text-6xl top-0 ">
            <h1 className=" animate-bounce animation-delay-0">J</h1>
            <h1 className=" animate-bounce animation-delay-100">e</h1>
            <h1 className=" animate-bounce animation-delay-200">r</h1>
            <h1 className=" animate-bounce animation-delay-300">o</h1>
            <h1 className=" animate-bounce animation-delay-400">n</h1>
          </div>
        
        
        <div className="relative w-full text-left p-8  bg-opacity-75 text-white">
          <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4 font-mono static"> I&apos;m a &rdquo;retired&rdquo; videogame enthusiast and a budding software engineer with aspirations to become a fullstack engineer. </p>
            <p className="mt-4 font-mono static"> I have recently pivoted from pre-med to a career in technology due to my ever-increasing interest in the field. </p>
            <p className="mt-4 font-mono static"> As of right now my skills/softwares consists of : <strong>HTML, CSS, TypeScript, Python, SpringBoot, React, Tailwind, Django,and Java.</strong></p>
            <p className="text-right">If you&apos;re wondering the time is now: </p>
            
             <div className="text-right font-bold font-mono"><Clock></Clock></div> 

      </div>
      </div>    
       
      

      


      
      
      
    </main>

    
  );
}
