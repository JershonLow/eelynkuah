"use client"

import Image from 'next/image'
import {useEffect, useState} from "react";

export default function Home() {
    const [visible, setVisible] = useState(false);
    const [transform, setTransform] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    useEffect(() => {
        setTransform(true);
    }, []);

    return (
        <div className={"pt-32 h-[100vh] z-0"}>
            {/*Desktop version*/}
            <div className={`hidden sm:flex justify-center flex-row transition-temp-1 w-[100vw]
            ${visible ? "opacity-100" : "opacity-0"}
            ${transform ? "translate-y-0" : "translate-y-8"}
            `}>
                <Image
                    src="/images/IMG_9252_JPG.jpg"
                    width={480}
                    height={480}
                    alt="Picture of the author"
                    className="circle-image size-[300px] lg:size-[480px]"
                />
                <div className={"w-[480px]"}>
                    <div className={"flex flex-col justify-start items-start ml-8 w-[250] lg:w-[370px]"}>
                        <p className={"primary-title -translate-x-1.5"}>eelyn kuah</p>
                        <p className={"primary-text text-[22px] pb-10 pt-5"}>my portfolio</p>
                        <p className={"secondary-text"}>I am a final-year Communication student at Sunway University
                            with a strong passion for creating. Over the past few years, I’ve honed my skills in content
                            creation, social media management, video production as well as event management through
                            various external and academic projects. I’m eager to apply my creative thinking and
                            management skills in an internship where I can contribute to impactful projects. I am also
                            expecting to learn and grow in my skills and become a contributing member of the
                            organisation. Do to take a look at my portfolio to see some of the work I&#39;ve done so
                            far,
                            and feel free to reach out if you&#39;d like to connect. Thank you for your time! </p>
                    </div>
                </div>
            </div>
            {/*Mobile version*/}
            <div className={`flex flex-col sm:hidden items-center justify-center transition-temp-1
                ${visible ? "opacity-100" : "opacity-0"}
                ${transform ? "translate-y-0" : "translate-y-8"}
                `}>
                <div className={"flex flex-row"}>
                    <div className={"pt-3"}>
                        <p className={"text-[12vw] font-primary font-semibold leading-[13vw] w-[40vw]"}>eelyn kuah</p>
                        <p className={"primary-text text-[5vw] pb-[4vw] pt-[4vw]"}>my portfolio</p>
                    </div>
                    <Image
                        src="/images/IMG_9252_JPG.jpg"
                        width={450}
                        height={450}
                        alt="Picture of the author"
                        className="circle-image size-[40vw]"
                    />
                </div>
                <p className={"secondary-text px-[10vw]"}>I am a final-year Communication student at Sunway University
                    with a strong passion for creating. Over the past few years, I’ve honed my skills in content
                    creation, social media management, video production as well as event management through
                    various external and academic projects. I’m eager to apply my creative thinking and
                    management skills in an internship where I can contribute to impactful projects. I am also
                    expecting to learn and grow in my skills and become a contributing member of the
                    organisation. Do to take a look at my portfolio to see some of the work I&#39;ve done so far,
                    and feel free to reach out if you&#39;d like to connect. Thank you for your time! </p>
            </div>
        </div>
    );
}
