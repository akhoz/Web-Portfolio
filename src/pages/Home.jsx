import Marquee from "react-fast-marquee";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaArrowDown } from 'react-icons/fa';
import { TbMathIntegralX } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


function Home() {

  return (
    <div className='flex flex-col w-full max-w-full overflow-x-hidden h-grow items-center justify-center bg-darkBlue'>
      <div className='flex flex-col h-screen items-center justify-center lg:w-10/12 lg:flex-row lg:justify-between xl:w-9/12'>
        <div className='flex flex-col justify-center space-y-2 w-9/12 items-center md:items-start md:w-3/4 lg:w-1/3'>
          <p className='text-myAquamarine'>
            Hello, my name is
          </p>
          <h1 className='text-white font-bold text-5xl'>
            Adrian Villalobos
          </h1>
          <h2 className='text-myGray text-4xl'>
            Software Engineer
          </h2>
          <p className='text-myDarkGray text-center px-16 md:px-0 md:text-md md:text-start'>
            I am currently a student at ITCR, Costa Rica. I am interested in everything
            related to artificial intelligence, cybersecurity, web development, among others.
            Discover more about me in this portfolio.
          </p>
          <div className='flex flex-row items-center justify-center space-x-5 md:justify-start'>
            <button className='flex flex-col items-center justify-center text-white'>
              <div className='flex flex-row items-center justify-center space-x-1'>
                <FaArrowDown />
                <p>Download CV</p>
              </div>
              <div className='bg-myAquamarine pt-0.5 w-full'></div>
            </button>
            <div className='w-1/6'>
              <Marquee className='rounded-lg bg-mySecondary text-white text-xl'
                pauseOnHover='true'
                speed='15'>
                <TbMathIntegralX />
                <FaReact />
                <FaVuejs />
                <SiTailwindcss />
                <IoLogoJavascript />
                <FaHtml5 />
                <FaCss3Alt />
                <FaPython />
                <FaRust />
                <SiCsharp />
                <FaJava />
                <SiVite />
                <FaGitAlt />
                <FaLinux />
              </Marquee>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row bg-myAquamarine lg:flex-col space-x-3 lg:space-x-0 justify-center items-center rounded-xl overflow-hidden px-2 py-2 mt-16 lg:mt-0'>
          <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 text-white`} />
          </a>
          <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-3xl mr-3  my-2 md:transition-transform md:transform md:hover:scale-110 text-white mx-0`} />
          </a>
          <a href="mailto:akhozdev@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 text-white`} />
          </a>
          <a href="https://twitter.com/akhoz69" target="_blank" rel="noopener noreferrer">
            <BsTwitterX className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 text-white`} />
          </a>
          <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
            <BsInstagram className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 text-white`} />
          </a>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center space-y-2 w-8/12'>
        <h2 className='text-white text-4xl'>
          How to <span className='text-myAquamarine'>reach</span> me ?
        </h2>
        <p className='text-myGray w-1/2'>
          You can contact me via email at <a href="mailto:akhozdev@gmail.com"
            className={`border-b border-myAquamarine`}>
            akhozdev@gmail.com</a> or on LinkedIn. Also, for more casual matters, feel free to reach out to me on Instagram or X (Twitter).
        </p>
      </div>
    </div>
  );
}

export default Home;
