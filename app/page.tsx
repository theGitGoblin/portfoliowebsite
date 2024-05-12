import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <main className= "bg-white backgrounbd-size: auto;pt-px">
      <Head>
      <link href="globals.css" rel="stylesheet"></link>
      </Head>
      <div className="bg-sky-900 background-attachment: fixed; p-2 ">
        <header className="text-white text-align: left;"> Portfolio </header>
      </div>
      <h1 className="p-6 text font-mono "> Jeron Clarke </h1>
      <h2 className="p-12 text">About Me </h2>
        -- Please make this a box --
        <p className="text-right p-15" >
          Hello! My name is Jeron Clarke and I am a Computer Science student craving for learning!
          I have recently pivoted from pre-med to a career in technology due to my love of technology that I have been fostering since I was a child.
          As of right now my skills/softwares consists of : HTML, CSS, TypeScript, Python, SpringBoot, React, Tailwind, Django.
                            
        </p>
      <p>

      </p>
      <h3> My current achievements </h3>
      <h4> Current/ Previous Projects </h4>
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
