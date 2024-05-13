import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import convention from "./convention.png"
export default function Home() {
  return (
    <main className= "bg-white backgrounbd-size: auto;pt-px">
      
        <Head>
          <link href="globals.css" rel="stylesheet"></link>
        </Head>
        <div className="bg-sky-900 background-attachment: fixed; p-2 ">
          <header className="text-white text-align: left;"> Portfolio </header>
        </div>
        <div className="clearfix">
          <Image className="float-right mr-4 h-80 w-80 border-radius: 1.5rem; transition-transform duration-300 transform hover:scale-105 inline-block" src={convention}></Image>
          </div>
        <h1 className=" inline-flex p-6 text font-mono text-sky-900 font-extrabold text-xl"> Jeron Clarke </h1>
        <div >
        
        </div>      
        
        <h2 className=" inline-block mr-px p-20 text font-mono  text-sky-900 font-extrabold text-3xl">About Me </h2>
         
          <p className="text-right p-15 inline-table box-sizing:128 border-box 128; " >
            Hello! My name is Jeron Clarke and I am a Computer Science student craving for learning!
            I have recently pivoted from pre-med to a career in technology due to my love of technology that I have been fostering since I was a child.
            As of right now my skills/softwares consists of : HTML, CSS, TypeScript, Python, SpringBoot, React, Tailwind, Django.
                              
          </p>
        <p>

        </p>
        <h4 className="inline-flex"> Current/ Previous Projects </h4>
        <div className = "text-right border-status-0.5rem ">
        <h5>My Links</h5>
            <ul>
            <li>
            <a className="Personal" href= "https://www.linkedin.com/in/jeron-clarke/"> My LinkedIn</a>
            </li>
            <li>
            <a className="Personal" href="https://github.com/Codeizfun"> My Github </a>
            </li>
            <li>
            <a className="Personal"href="mailto:jeronclarke09@gmail.com">Send email</a>
            </li>        
            </ul> 
          </div>
                            
                  
    </main>
  );
}
