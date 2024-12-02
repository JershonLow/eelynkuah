import { motion } from "motion/react";


function List_of_points({points}:{points:string[]}) {
    return (
        <>
            {points.map((point, index) => (
                <li key={index} className="list-disc">{point}</li>
            ))}
        </>
    );
}


export function ResumePointsDate ({date, title, position, points, delay = 0} : {date: string, title: string, position: string, points: string[], delay?: number}) {
    const parentVariant = {
        show: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            }
        },
        hide: {opacity: 0, translateX: 100},
    }

    const childVariant = {
        show: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 1,
            }
        },
        hide: {opacity: 0, translateX: 100},
    }

    return (
        <>
        <motion.div
            className="pt-5 flex flex-row w-[33rem] pl-10"
            variants={parentVariant}
            initial="hide"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}
        >
            <motion.div
                className="flex flex-col justify-start items-end pr-[15px] w-[10rem]"
                variants={childVariant}
            >
                <p className="secondary-text text-xl">{date}</p>
            </motion.div>
            <motion.div
                className="flex flex-col justify-start w-[23rem]"
                variants={childVariant}
            >
                <p className="primary-text text-xl">{title}</p>
                <p className="primary-text text-l">{position}</p>
                <ul className="pl-7">
                    <List_of_points points={points}/>
                </ul>
            </motion.div>
        </motion.div>
        </>
    )
}