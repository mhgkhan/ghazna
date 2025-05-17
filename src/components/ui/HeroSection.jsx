import React from 'react';
import Link from "next/link";
import { DiResponsive } from "react-icons/di";
import { SiCodesignal } from "react-icons/si";
import Image from 'next/image';
import CheckVisitors from "@/components/ui/CheckVisitors"
import LinkButton from './buttonsandlinks/LinkButton';

const HeroSection = () => {
    return (
        <section className="hero w-full my-5" id="hero">
            <div className="container mx-auto">
                <div className="hero-area flex items-center justify-center md:gap-10 gap-5 md:flex-row flex-col-reverse py-5 md:px-10 px-5">
                    {/* Hero Content */}
                    <div className="hero-content md:py-5 py-1">
                        <h1 className="leading-snug my-3 flex-items-center justify-center md:text-5xl text-4xl font-bold">
                            Your <span className="text-pink-600">Developer Partner</span> Hasnain
                        </h1>
                        <p className="my-3 dark:text-gray-300 text-gray-600 text-lg">I am a full-stack developer with a passion for building beautiful and functional websites.</p>
                        <div className="cta flex items-center gap-5 my-3">
                            <LinkButton text={"View Projects"} link={"/projects"} />
                            <Link href="/blog" className="btn md:px-4 px-3 py-3 rounded-md mx-1 text-center hover:underline dark:bg-black dark:text-white bg-white text-black border border-2 border-transparent dark:active:border-white active:border-dotted active:border-black" aria-label="Read Latest Blogs">Latest Blogs</Link>
                        </div>
                        <div className="md:my-10 my-7 flex items-center justify-start md:gap-10 gap-5">
                            <div className="block">
                                <h2 className="md:text-3xl text-xl font-bold">3 Years</h2>
                                <p className="dark:text-gray-300 text-gray-600 my-2">Experience</p>
                            </div>
                            <div className="block">
                                <h2 className="md:text-3xl text-xl font-bold">88+</h2>
                                <p className="dark:text-gray-300 text-gray-600 my-2">Clients</p>
                            </div>
                            <CheckVisitors />
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className="her-image md:w-[40%] w-[80%] relative md:h-[400px] h-[300px]">
                        <Image src="/images/myProfile.png" alt="Hero Image of Developer Hasnain" width={400} height={400} className="object-cover object-center rounded-lg w-full h-full" />
                        <div className="p-2 md:px-3 px-2 absolute bottom-[10px] left-[-30px] md:bottom-5 md:left-[-30px] text-lg flex items-center justify-center gap-3 bg-white dark:bg-black rounded-md shadow-md dark:shadow-gray-20">
                            <span className="text-lg"><SiCodesignal /></span> <span className="text-sm">Graphic Design</span>
                        </div>
                        <div className="p-2 md:px-3 px-1 absolute bottom-[50px] left-[-30px] md:bottom-20 md:left-[-30px] text-lg flex items-center justify-center gap-3 bg-white dark:bg-black rounded-md shadow-md dark:shadow-gray-20">
                            <span className="text-lg"><DiResponsive /></span> <span className="text-sm">Web Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
