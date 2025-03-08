import {Button} from "@material-tailwind/react";

import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Home() {
    return (
        <div className="w-screen flex items-center justify-center mt-48 md:mt-60 lg:mt-72">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:w-10/12 xl:w-9/12">
                <div className="w-9/12 md:w-2/3 lg:w-2/5">
                    <h1 className="text-4xl text-base-c text-center lg:text-start">
                        Hello, I'm Adrian Villalobos
                    </h1>
                    <p className="mt-3 mb-8 text-center lg:text-start">
                        Costa Rican student at ITCR, 19 years old. Studying
                        data science to build a career in the field.
                        Experienced in web development. Linux enthusiast
                        with hands-on experience in Ubuntu, Fedora, and Arch Linux.
                    </p>
                    <div className="flex flex-row gap-5 items-center justify-center lg:justify-start">
                        <Button
                            size="md"
                            className="bg-base-c smooth text-hover-fg px-10"
                        >
                            <span>Contact me</span>
                        </Button>
                        <Button
                            size="md"
                            className="px-10 border-2 border-base-c bg-main-bg
                                smooth hover:bg-base-c hover:text-hover-fg"
                        >
                            <span>View Projects</span>
                        </Button>
                    </div>
                </div>
                <div className='flex flex-row bg-base-b space-x-3 justify-center items-center rounded-xl overflow-hidden text-white px-4 py-2 mt-10 lg:flex-col lg:space-x-0 lg:px-2 lg:mt-0'>
                    <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110`} />
                    </a>
                    <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 mx-0`} />
                    </a>
                    <a href="mailto:akhozdev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110`} />
                    </a>
                    <a href="https://twitter.com/akhoz69" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110`} />
                    </a>
                    <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110`} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;