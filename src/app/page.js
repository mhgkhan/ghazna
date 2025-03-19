import HeadingSection from "@/components/ui/HeadingSection";
import HeroSection from "@/components/ui/HeroSection";
import Services from "@/components/ui/Services";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";


export default function Home() {


  return (
    <div className="page">

      {/* Hero Section  */}
      <HeroSection />
      {/* services section  */}
      <Services />
      {/* contact section  */}
      <section className="contact my-10 w-full">
        <div className="container mx-auto">
          <HeadingSection start={"Contact"} end={"Us"} />
          <div className="my-5 flex items-start justify-center gap-5 p-3 md:flex-row flex-col-reverse w-full">

            {/* social media icons section  */}
            <div className="social-medias md:w-[50%]">
              <h3 className="my-2 text-2xl font-bold dark:text-white text-gray-900 ">Through Social Media</h3>
              <p className="dark:text-gray-200 text-gray-600">Contact with me on online social media platforms.</p>

              <div className="accounts mt-5 flex items-center justify-start flex-wrap gap-2 w-full">

                {
                  Array.from([
                    { icon: <FaTwitter />, text: "@mhghazna", link: "/", color: "text-blue-500" },
                    { icon: <FaInstagram />, text: "@mhgkhan", link: "/", color: "text-pink-500" },
                    { icon: <FaFacebook />, text: "@mhghazna", link: "/", color: "text-blue-500" },
                    { icon: <FaLinkedin />, text: "@mhghazna", link: "/", color: "text-blue-500" },
                    { icon: <FaGithub />, text: "@mhgkhan", link: "/", color: "text-white" },
                    { icon: <FaWhatsapp />, text: "@mhghazna", link: "/", color: "text-green-600" },
                  ]).map((ele, ind) => {
                    return <div key={ind} className="saccount-block flex items-center justify-center gap-2 rounded-md  my-2 p-2 w-[190px] md:mx-0 mx-auto border border-1  dark:border-white border-gray-900">
                      <span className={`md:text-4xl text-2xl border-r border-1 border-gray-300 pr-2 ${ele.color}`}>{ele.icon}</span>
                      <Link href={ele.link} className="md:text-xl text-lg dark:text-white text-gray-900 font-bold">{ele.text}</Link>
                    </div>
                  })
                }

              </div>

            </div>



            {/* contact us form section  */}
            <div className="contactus-form md:w-[50%]">
              <h3 className="my-2 text-2xl font-bold dark:text-pink-500 text-pink-700 ">Directly Through Form</h3>
              <p className="dark:text-gray-200 text-gray-600">Send your query directly from here. NOTE: you have only three message attempts</p>
              <form className="w-full p-2 mt-5">
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                  <input type="text" name="name" placeholder="Full name" className="dark:text-white text-black font-bold focus:bg-gray-700 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                  <input type="email" name="email" placeholder="Email" className="dark:text-white text-black font-bold focus:bg-gray-700 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <div className="first-row flex items-center justify-center gap-3 my-2 md:flex-row flex-col ">
                  <input type="text" name="phone" placeholder="Phone" className="dark:text-white text-black font-bold focus:bg-gray-700 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                  <input type="text" name="Subject" placeholder="Subject" className="dark:text-white text-black font-bold focus:bg-gray-700 rounded-md p-2 md:w-[50%] w-full outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit" />
                </div>
                <textarea name="message" placeholder="Type message" rows={5}  className="font-bold w-full focus:bg-gray-700 rounded-md p-2 outline-none border border-1 dark:border-gray-300 border-gray-800 focus:border-2 focus:border-dotted bg-inherit"></textarea>
                <button className="submit w-auto p-3 border-1 border border-gray-500 text-white hover:bg-pink-600 bg-pink-700 text-center my-2 flex items-center justify-center gap-2 rounded-md active:border-2 active:border-dotted"><span><FaPaperPlane /></span> Send</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

