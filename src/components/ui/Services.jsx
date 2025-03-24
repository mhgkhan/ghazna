"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import HeadingSection from './HeadingSection';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Services = () => {

    const [leftServices, setLeftServices] = useState([
        { title: "Web Development", link: "/" },
        { title: "Data Entry", link: "/" },
    ]);
    const [rightServices, setRightServices] = useState([
        { title: "Graphic Designing", link: "/" },
        { title: "Printing Studio" },
    ]);

    // const [services, setServices] = useState([
    //     { title: "Web Development", link: "/", side: "right" },
    //     { title: "Graphic Designing", link: "/", side: "left" },
    //     { title: "Data Entry", link: "/", side: "right" },
    //     { title: "Printing Studio", link: "/", side: "left" },
    // ])

    const [height, setHeight] = useState(100 * (leftServices.length + rightServices.length));
    // const [isMobile, setIsMobile] = useState(false);

    useEffect(() => { window.innerWidth == 766 ? setIsMobile(true) : false;


        Aos.init({duration:1000})


    }, [])
    // alert(height)
    return (
        <section className="my-10 w-full overflow-x-hidden" id="servicessection">
            <div className="container mx-auto">
                <HeadingSection start={"My"} end={"Services"} />

                <div className={`my-5 flex items-start justify-center md:flex-row flex-col-reverse md:my-5 md:h-[${height}px] md:gap-0`}>
                    <div className="left-services md:w-[40%] w-full">


                        {
                            leftServices.map((ele, ind) => {
                                return <div data-aos="fade-right" key={ind} className={`w-full left-item-services md:mt-[100px] h-[100px] dark:bg-white bg-gray-200 p-2 flex items-center justify-center flex-col gap-2`}>
                                    <h3 className="lg:text-3xl md:text-2xl text-center font-bold text-pink-600">{ele.title} </h3>
                                    <Link href={ele.link} className="mx-auto  btn md:px-4 px-3 py-3 rounded-md text-center hover:underline dark:bg-white dark:text-black bg-black text-white active:border active:border-2 dark:active:border-black border-white active:border-dotted">View Pricing</Link>
                                </div>
                            })
                        }

                    </div>

                    <div className="md:flex hidden center-line w-[10px] rounded-full bg-pink-600 h-full"></div>

                    <div className="right-services md:w-[40%] w-full ">

                        {
                            rightServices.map((ele, ind) => {
                                return <div data-aos="fade-left" key={ind} className={`w-full h-[100px] md:mt-[${100 * ind}px] right-item-services dark:bg-white bg-gray-200  p-2 flex items-center justify-center flex-col gap-2`}>
                                    <h3 className="lg:text-3xl md:text-2xl text-center font-bold text-pink-600">{ele.title} </h3>
                                    <Link href="#contact" className="mx-auto  btn md:px-4 px-3 py-3 rounded-md text-center hover:underline dark:bg-white dark:text-black bg-black text-white active:border active:border-2 dark:active:border-black border-white active:border-dotted">View Pricing</Link>
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
