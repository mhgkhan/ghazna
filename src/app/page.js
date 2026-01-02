import ContactusForm from "@/components/ui/ContactusForm";
import HeadingSection from "@/components/ui/HeadingSection";
import HeroSection from "@/components/ui/HeroSection";
import Services from "@/components/ui/Services";
import FreezeEnv from "@/config/EnvConfig";
import { headers } from "next/headers";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";



const fetchVisitors = async (ip) => {
  let obj = {};
  try {
    const request = await fetch(`${FreezeEnv.DOMAIN}api/users/visitor`, {
      method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ip }), cache:"no-cache"
    });


    if (request.ok) {
      const res = await request.json();
      // console.log(res);
      
      if (res.success) {
        obj.success = true;
        obj.error = false;
        obj.message = res.message;
        obj.data = res.data;
      }
      else {
        obj.success = false;
        obj.error = true;
        obj.message = res.message;
      }
    }
    else {
      obj.success = false;
      obj.error = true;
      obj.message = request.statusText;
    }

  } catch (error) {
    console.log(error);
    
    obj.success = false;
    obj.error = true;
    obj.message = error.message;
  }
  finally {
    return obj;
  }
}


export default async function Home(req) {


  // console.log((await headers()).get("x-forwarded-for"))
  const userHeaders = await headers();

  const ip = userHeaders.get("x-forwarded-for") || userHeaders.get("remote-addr") || userHeaders.get("cf-connecting-ip") || userHeaders.get("x-real-ip") || userHeaders.get("x-client-ip") || "unknown";

  if(process.env.NODE_ENV == "production"){
    const runVisitorFunction = await fetchVisitors(ip)
  }

  
  return (
    <article className="page">
      {/* Hero Section  */}
      <HeroSection visitorss={runVisitorFunction.error ? -11 : runVisitorFunction.data.visitors} />
      {/* services section  */}
      <Services />

      {/* recent blogposts  */}



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
                    { icon: <FaTwitter />, text: "@mhghazna", link: "https://x.com/mhghazna", color: "text-blue-500" },
                    { icon: <FaInstagram />, text: "@mhgkhan", link: "https://instagram.com/mhgkhan", color: "text-pink-500" },
                    { icon: <FaFacebook />, text: "@mhghazna", link: "https://facebook.com/mhghazna", color: "text-blue-500" },
                    { icon: <FaLinkedin />, text: "@mhghazna", link: "https://linkedin.com/in/ghznap/", color: "text-blue-500" },
                    { icon: <FaGithub />, text: "@mhgkhan", link: "https://github.com/mhgkhan", color: "dar:text-white text-black" },
                    { icon: <FaWhatsapp />, text: "@mhghazna", link: "https://wa.me/923251857693", color: "text-green-600" },
                  ]).map((ele, ind) => {
                    return <div key={ind} className="saccount-block flex items-center justify-center gap-2 rounded-md  my-2 p-2 w-[190px] md:mx-0 mx-auto border border-1  dark:border-white border-gray-900">
                      <span className={`md:text-4xl text-2xl border-r border-1 border-gray-300 pr-2 ${ele.color}`}>{ele.icon}</span>
                      <Link target="_blank" href={ele.link} className="md:text-xl text-lg dark:text-white text-gray-900 font-bold">{ele.text}</Link>
                    </div>
                  })
                }
              </div>
            </div>
            {/* contact us form section  */}
            <ContactusForm />
          </div>
        </div>
      </section>
    </article>
  );
}

