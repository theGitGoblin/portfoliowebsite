import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        <header>
         Jeron Clarke
        </header>
      </div>
      <h1>
        About Me
      </h1>
        <p className="J-intro">
          Hello! My name is Jeron Clarke and I am a Computer Science student craving for learning!
          I have recently pivoted from pre-med to a career in technology due to my love of technology that I have been fostering since I was a child.
          As of right now my skills/softwares consists of : HTML, CSS, TypeScript, Python, SpringBoot, React, Tailwind, Django.
                            
        </p>
      <h2><strong>My Journey</strong></h2>
      <p>

      </p>
      <h3> My current achievements </h3>
      <h4> Current/ Previous Projects </h4>

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
                            
                    

    </main>
  );
}
