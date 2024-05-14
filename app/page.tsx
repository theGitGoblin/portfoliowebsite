import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import convention from "./convention.png"
import starpixel from "/app/Icons/starpixel.gif"
export default function Home() {
  return (
    <main className= "bg-black min-h-screen">
        <Head>
          <link href="globals.css" rel="stylesheet"></link>
        </Head> 
        <Image alt="Stars" src={starpixel} quality={100} fill sizes="100vw" style={{ objectFit: 'cover' , }} />
    <div className="fixed top-5 right-5 flex space-x-4 z-50">
      <a className="transition-transform transform hover:scale-125" href="https://www.linkedin.com/in/jeron-clarke/" target="_blank" rel="noopener noreferrer">
        <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>
      <a className="transition-transform transform hover:scale-125" href="https://github.com/Codeizfun" target="_blank" rel="noopener noreferrer">
        <img className="w-8 h-8 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
      </a>
      <a className="transition-transform transform hover:scale-125" href="mailto:youremail@example.com">
        <img className="w-8 h-8 rounded-full" src="https://www.flaticon.com/free-icon/gmail_732200?term=mail&page=1&position=9&origin=tag&related_id=732200" alt="Email" />
      </a>
    </div>
     <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <span className=" absolute inset-y-40 left-16  text-white font-extrabold font-sans ">
          Hello! <br></br>My name is Jeron Clarke.
        </span>
      </div>
  
        
        
                            
                  
    </main>
  );
}
