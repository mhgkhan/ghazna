import Link from "next/link";
// import { FaKeyboard } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiCodesignal } from "react-icons/si";

export default function Home() {
  return (
    <div className="page">
      <section className="hero w-full my-5">
        <div className="container mx-auto">
          <div className="hero-area flex items-center justify-center md:gap-10 gap-5 md:flex-row flex-col-reverse py-5 md:px-10 px-5">

            {/* hero content  */}
            <div className="hero-content md:py-5 py-1">
              <h1 className="leading-snug my-3 flex-items-center justify-center md:text-5xl text-4xl font-bold">
                Your <span className="text-pink-600">Developer Partner</span> Hasnain
              </h1>
              <p className="my-3 dark:text-gray-300 text-gray-600 text-lg">I am a full-stack developer with a passion for building beautiful and functional websites.</p>
              <div className="cta flex items-center gap-5 my-3">
                <Link href="#contact" className="btn md:px-4 px-3 py-3 rounded-md mx-1 text-center hover:underline dark:bg-white dark:text-black bg-black text-white active:border active:border-2 dark:active:border-black border-white active:border-dotted">View Projects</Link>
                <Link href="#projects" className="btn md:px-4 px-3 py-3  rounded-md mx-1 text-center hover:underline dark:bg-black dark:text-white bg-white text-black active:border active:border-2 dark:active:border-white active:border-dotted active:border-black">Latest Blogs </Link>
              </div>

              <div className="md:my-10 my-7 flex items-center justify-start md:gap-10 gap-5">
                <div className="block">
                  <h2 className="md:text-3xl text-xl font-bold">3 Years</h2>
                  <p className="text-gray-500 my-2">Experience </p>
                </div>
                <div className="block">
                  <h2 className="md:text-3xl text-xl font-bold">88+</h2>
                  <p className="text-gray-500 my-2">Clients </p>
                </div>
                <div className="block">
                  <h2 className="md:text-3xl text-xl font-bold">10+ Projects</h2>
                  <p className="text-gray-500 my-2">Completed </p>
                </div>


              </div>
            </div>

            {/* hero image    */}
            <div className="her-image md:w-[40%] w-[80%] relative md:h-[400px] h-[300px]">
              <img src="/images/hero.jpg" alt="hero" className="object-cover object-center rounded-lg w-full h-full" />

              <div className="p-2 md:px-3 px-2 absolute bottom-[10px] left-[-30px] md:bottom-5 md:left-[-30px] text-lg flex items-center justify-center gap-3  bg-white dark:bg-black rounded-md shadow-md dark:shadow-gray-20">
                <span className="text-lg "><SiCodesignal /></span> <span className="text-sm">Graphic Design</span>
              </div>

              <div className="p-2 md:px-3 px-1 absolute bottom-[50px] left-[-30px] md:bottom-20 md:left-[-30px] text-lg flex items-center justify-center gap-3  bg-white dark:bg-black rounded-md shadow-md dark:shadow-gray-20">
                <span className="text-lg "><DiResponsive /></span> <span className="text-sm">Web Development</span>
              </div>

            </div>


          </div>
        </div>
      </section>

      {/* services section  */}
      <section className="my-5 w-full">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center mx-auto font-bold"><span className="text-pink-600">My</span> Services</h2>
          <div className="my-5 flex items-start justify-center md:flex-row flex-col-reverse md:my-5 md:h-[200px] md:gap-0">
            <div className="left-services md:w-[40%] w-full">
            <div className="w-full left-item-services md:mt-[90px] mt-4 h-[90px] bg-pink-600 p-2 flex items-center justify-center flex-col gap-2">
                <h3 className="lg:text-3xl md:text-2xl text-center font-bold text-white">Graphic Designing </h3>
                {/* <p className="text-gray-200  text-center w-full p-2 my-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non alias ut a veritatis itaque libero reiciendis voluptas eius eaque.
                </p> */}
                <Link href="#contact" className="mx-auto  btn md:px-4 px-3 py-3 rounded-md text-center hover:underline dark:bg-white dark:text-black bg-black text-white active:border active:border-2 dark:active:border-black border-white active:border-dotted">View Pricing</Link>  
              </div>
            </div>
            
            <div className="md:flex hidden center-line w-[10px] rounded-full bg-pink-600 h-full"></div>
            
            <div className="right-services md:w-[40%] w-full ">
              <div className="w-full h-[90px] right-item-services bg-white p-2 flex items-center justify-center flex-col gap-2">
                <h3 className="lg:text-3xl md:text-2xl text-center font-bold text-pink-600">Web Development </h3>
                {/* <p className="text-gray-500 text-center w-full p-2 my-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non alias ut a veritatis itaque libero reiciendis voluptas eius eaque.
                </p> */}
                <Link href="#contact" className="mx-auto  btn md:px-4 px-3 py-3 rounded-md text-center hover:underline dark:bg-white dark:text-black bg-black text-white active:border active:border-2 dark:active:border-black border-white active:border-dotted">View Pricing</Link>  
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
