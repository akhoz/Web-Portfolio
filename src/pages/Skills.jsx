import Layout from "../components/Layout";
import SkillItem from "../components/SkillItem";

import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbMathIntegralX } from "react-icons/tb";
import { FaRProject } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function Skills() {
    return (
        <Layout aditionalClasses="gap-y-4 md:gap-y-20">
            <SkillItem
                fgColor="text-base-b"
                title="Data Science"
                text={
                <p>
                    Right now, I am developing skills in the field of data science.
                    I am learning to use the most widely used Python libraries in this
                    sector, such as Pandas, NumPy, Matplotlib, Scikit-learn, PyTorch,
                    TensorFlow, etc. Additionally, I am focusing on learning technologies
                    like R, Excel, and Power BI to enhance my capabilities in this field.
                    Moreover, I have strong mathematical skills, which I will explore
                    further on this very page.
                </p>
                }>
                    <FaPython className="text-base-b"/>
                    <SiPandas className="text-base-b"/>
                    <SiNumpy className="text-base-b"/>
                    <GrMysql className="text-base-b"/>
                    <TbMathIntegralX className="text-base-b"/>
                    <FaRProject className="text-base-b"/>
            </SkillItem>
            <SkillItem
                fgColor="text-base-c"
                title="Web Development"
                text={
                    <p>
                        Throughout my bachelor's degree at ITCR, I have developed several web
                        applications using frameworks such as React, Vue, and even vanilla
                        HTML, CSS, and JS. However, I primarily focus on building web
                        applications using React, Tailwind CSS, and TypeScript. These
                        applications are generally full-stack, where I use tools like Flask
                        or ExpressJS. Additionally, I have some personal projects that involve
                        web development, such as this very portfolio.
                    </p>
                }>
                <FaReact className="text-base-c"/>
                <RiTailwindCssFill className="text-base-c"/>
                <SiTypescript className="text-base-c"/>
                <SiJavascript className="text-base-c"/>
                <FaPython className="text-base-c"/>
                <GrMysql className="text-base-c"/>
            </SkillItem>
            <SkillItem
                fgColor="text-base-j"
                title="Mathematics"
                text={
                    <p>
                        I have always had strong reasoning and mathematical thinking skills. Mathematics
                        has always been a field that has caught my attention, and I excel in it.
                        Thanks to ITCR, I have developed skills in differential and integral calculus,
                        linear algebra, probability, statistics, and numerical methods. Additionally,
                        I have worked as a teaching assistant in my university in these areas, further
                        enhancing my mathematical abilities.
                    </p>
                }>
            </SkillItem>
            <SkillItem
                fgColor="text-base-i"
                title="Soft skills and others"
                text={
                    <p>
                        I have strong communication skills and find it easy to connect with people,
                        whether in my professional or personal environment. I believe I have
                        good critical thinking skills and always try to question a solution before
                        implementing it. I consider myself a sociable person, and I am fluent in both
                        English and Spanish, so I have no trouble holding conversations in these languages.
                    </p>
                }>
            </SkillItem>
        </Layout>
    )
}

export default Skills;