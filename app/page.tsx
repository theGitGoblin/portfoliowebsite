import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import convention from "./convention.png"
import starpixel from "/app/Icons/starpixel.gif"
import myPhoto from "/app/Icons/myPhoto.JPG"
export default function Home() {
  return (
   <main className="bg-black min-h-screen relative">
      <Head>
        <link href="globals.css" rel="stylesheet" />
      </Head>
      <Image alt="Stars" src={starpixel} quality={100} fill sizes="100vw" style={{ objectFit: 'cover' }} />
      
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
        
        <div className="text-center text-white font-extrabold font-mono text-6xl">
          <h1>Hi, <br />I'm</h1>
          
          <div className="flex justify-center items-center mt-4">
            <h1 className="inline-block animate-bounce animation-delay-0">J</h1>
            <h1 className="inline-block animate-bounce animation-delay-100">e</h1>
            <h1 className="inline-block animate-bounce animation-delay-200">r</h1>
            <h1 className="inline-block animate-bounce animation-delay-300">o</h1>
            <h1 className="inline-block animate-bounce animation-delay-400">n</h1>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full text-center p-8 bg-black bg-opacity-75 text-white">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 font-mono">I'm a "retired" videogame enthusiast and a budding software engineer. I have recently pivoted from pre-med to a career in technology due to my ever-increasing intrest of field that I have been fostering since I was a child. As of right now my skills/softwares consists of : HTML, CSS, TypeScript, Python, SpringBoot, React, Tailwind, Django.</p>
      </div>
    </main>
  
        
        
                            
                  
    
  );
}
