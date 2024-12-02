"use client"


import {ResumePointsDate} from "@/components/resume-points-date";
import { motion } from "motion/react";
import {useEffect, useState} from "react";

const variants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    },
    hidden: {opacity: 0},

}

const motion_transition = {
    visible: {
        opacity: 1, translateX: 0, transition: {
            duration: 0.5,
        }
    },
    hidden: {opacity: 0, translateX: 100},
}

const list_SunWAYtoSustainability: string[] =
    [
        "Successfully coordinated activities across multiple departments while enhancing team efficiency and securing favourable outcomes.",
        "Resolved conflicts among team members, fostering collaboration and maintaining productivity.",
        "Spearheaded campaign planning and execution which was attended by at least 350+ students, lecturers, tourists, etc."
    ]

const list_SunwayFPSC: string[] =
    [
        "Successfully coordinated large scale events including orientation which was attended by 700+ students.",
        "Review, approved and executed event proposals and oversee event planning and execution such as prom.",
        "Facilitated meetings and managing council operations.",
        "Key liaison member in assisting effective communication between students, council members and the administration."
    ]

const list_NLCC: string[] =
    [
        "Head of Production, Director and Scriptwriter of a play.",
        "Wrote and directed a 45-minute stage play attended by 250++ people.",
        "Head of Event (Collaborated with NGOs such as Dignity for Children to organise 3 successful charity outreach events and raised a total of RM18000+).",
        "Managed large teams to organise and coordinate events."
    ]

const list_NLCC_Camp: string[] =
    [
        "Content creating and scriptwriting for promotional video contents.",
        "Developed posts, reels, and stories with engagement of 1000+ views.",
        "Filmed, edited, and graphic design for video and visual content."
    ]

export default function Resume() {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const delay = isPageLoading ? 0.25 : 0;
    const delay_1 = isPageLoading? 0.5 : 0;
    const delay_2 = isPageLoading? 0.75 : 0;

    return (
        <div className={"pt-32 min-h-screen z-0"}>
            <p className={"primary-text text-5xl pl-[17vw] pb-10"}>resume</p>
            <motion.div
                className={""}
            >
                <motion.div
                    className={"w-screen flex flex-row items-start"}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <motion.p
                        className={"primary-text text-3xl pl-[17vw] w-1/2"}
                        variants={motion_transition}
                    >Experience
                    </motion.p>
                    <div className={"pt-5 flex flex-col w-[1500px] gap-8"}>
                        <div className={"pl-52"}>
                            <ResumePointsDate date={"Apr - Jul 2024"}
                                              title={"SunWAYtoSustainability"}
                                              position={"Campaign Director"} points={list_SunWAYtoSustainability}/>
                            <ResumePointsDate date={"Sep - Dec 2022"}
                                              title={"Sunway Foundation Programme Student Council"}
                                              position={"Vice President and Student Advisor"} points={list_SunwayFPSC}
                            delay={delay}/>
                            <ResumePointsDate date={"2021 - 2023"}
                                              title={"New Life Community Church - Impact (youth group)"}
                                              position={"Head of Outreach"} points={list_NLCC}
                            delay={delay_1}/>
                            <ResumePointsDate date={"Feb 2022 - May 2023"}
                                              title={"New Life Community Church - Impact Camp (youth camp)"}
                                              position={"Social Media Manager"} points={list_NLCC_Camp}
                            delay={delay_2}/>
                        </div>
                        {/*<motion.div className={"flex flex-col justify-start items-end pr-[15px]"}*/}
                        {/*            variants={motion_transition}*/}
                        {/*>*/}
                        {/*    <p className={"secondary-text text-xl"}>Apr - Jul 2024</p>*/}
                        {/*</motion.div>*/}
                        {/*<motion.div className={"flex flex-col justify-start items w-[21rem]"}*/}
                        {/*            variants={motion_transition}*/}
                        {/*>*/}
                        {/*    <p className={"primary-text text-xl"}>SunWAYtoSustainability</p>*/}
                        {/*    <p className={"primary-text text-l"}>Campaign Director</p>*/}
                        {/*    <ul className={"pl-7"}>*/}
                        {/*        <li></li>*/}
                        {/*        <li>Resolved conflicts among team members, fostering collaboration and maintaining productivity.</li>*/}
                        {/*        <li>Spearheaded campaign planning and execution which was attended by at least 350+ students, lecturers, tourists, etc.</li>*/}
                        {/*    </ul>*/}
                        {/*</motion.div>*/}
                    </div>
                </motion.div>

            </motion.div>
        </div>
    )
}