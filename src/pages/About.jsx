import {Link} from "react-router-dom";

import Layout from "../components/Layout";
import AboutMeItem from "../components/AboutMeItem.jsx";

function About() {
    return (
        <Layout>
            <AboutMeItem
                fgColor="text-base-b"
                bgColor="bg-base-b"
                title="About me">
                My name is Adrian Villalobos. I am currently studying Computer Engineering at ITCR.
                I want to pursue a career in data science,
                so I am studying that field alongside my degree. In general,
                I consider myself an enthusiast in this area, as well as in
                the Linux operating system, with which I have
                gained extensive experience—especially with Ubuntu, Fedora, and, most recently, Arch Linux.
                Additionally, due to my enthusiasm for Linux, I really enjoy 'ricing,' so
                it has become a hobby of mine. I will be updating this page’s
                <a className="text-base-b font-bold cursor-pointer">&nbsp;Linux section&nbsp;</a> with my latest rice setups.
                Let me know if you’d like any refinements!"
            </AboutMeItem>

            <AboutMeItem
                fgColor="text-base-c"
                bgColor="bg-base-c"
                title="What am I focusing on?">
                Currently, I am focused on completing my Bachelor's degree in Computer Engineering,
                which I expect to finish by the end of 2026. Additionally, I am independently
                studying
                <span className="text-base-c">&nbsp;data science</span>,
                as I aim to pursue a career in this field.
                To achieve this, I am learning libraries such as Pandas, NumPy,
                Matplotlib, Scikit-learn, among others. As I delve deeper into
                this sector, the number of libraries I study will continue to grow.
                I also dedicate time to personal projects, primarily involving web
                development, such as this portfolio.
            </AboutMeItem>

            <AboutMeItem
                fgColor="text-base-j"
                bgColor="bg-base-j"
                title="Professional Profile">
                I consider myself a hardworking person, always open to receiving feedback
                from others. I believe I have a strong foundation in both soft skills and,
                of course, technical skills (which are detailed in the
                <Link to="/skills" className="text-base-j font-bold cursor-pointer">&nbsp;skills&nbsp;</Link>
                section).
                I am a self-taught individual and have no issues learning on my own.
                I also believe I have strong reasoning and problem-solving abilities.
            </AboutMeItem>
        </Layout>
    )
}

export default About;