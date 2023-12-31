"use client";
import React , {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C++</li>
                <li>PostgreSQL</li>
                <li>Tailwind CSS</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>BS in Computer Science, Portland State University,OR</li>
                <li>AS Transfer, Portland Community College,OR</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Udemy 100 hours of Python</li>
            </ul>
        )
    }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
  }
  return <section id="about" className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gsp-16 sm:py-16 xl:px-16'>
        <Image src="/Images/about-image.jpeg" alt="about-image" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                I am going to graduate from Portland State University in June 
                2024 with BS in Computer Science degree.
                I have experience working with HTML,CSS,JavaScript,Python,
                PostgreSQL,C++,Next.JS and Git. I am a quick learner and 
                I am always looking to expand my knowledge and skill set. 
                I am a team player and I am excited to work with others 
                to create amaxing applications.
            </p>
            <div className='flex flex-row  justify-start mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Skills{" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "} Education{" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "} Certifications{" "}</TabButton>
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    </div>
</section>
}

export default AboutSection;