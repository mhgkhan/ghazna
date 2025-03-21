import HeadingSection from '@/components/ui/HeadingSection'
import FreezeEnv from '@/config/EnvConfig';
import Image from 'next/image'
import React from 'react'

// const requestCurrecy = async (key, fr, to, amount) => {
//   const request = await fetch(`https://api.exconvert.com/convert`, {
//     method: "GET",
//     headers: { "content-type": "application/json", "access_key": key, from:fr, to, amount }
//   });
//   const response = await request.json();
//   return response;
// }

const page = async () => {

  // const changeCurrency = await requestCurrecy(FreezeEnv.CURRECY_API_KEY, "PKR", "USD", 1000);
  // console.log(changeCurrency);


  return (
    <article className='page w-full h-full py-10 md:px-4 px-2'>

      <section className='intro w-full my-5'>
        <div className='container mx-auto'>
          <h1 className="md:text-4xl text-3xl font-bold">My Pricing</h1>
          <p className='my-2 dark:text-gray-200 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore? Sit, accusantium nulla cum, natus atque repellendus adipisci voluptas, deserunt minus repudiandae explicabo aliquam. Eos porro quam nisi ipsum consequatur.</p>
        </div>
      </section>

      <br />
      <br />

      <section className="w-full my-5">
        <div className='container mx-auto'>
          <HeadingSection start={"Pricing For"} end={"Web Development"} />
          <p className='my-2 text-center dark:text-gray-200 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, enim! </p>

          <div className="my-5 w-full flex items-center justify-center flex-wap md:flex-row flex-col gap-5">
            {
              Array.from([
                { title: "Static Website", features: ["Responsive", "Modren UI", "All pages", "Logic Based"], pricing: {exact:5999, prev: 10000}, image: "" },
                { title: "Full Stack Website", features: ["Responsive", "Modren UI", "All pages", "Logic Based", "Modren Tech", "Scalable", "User authentication", "On your choice logic", "BMS", "CMS", "Deploy Preview",], pricing: {exact:`upto 2000`, prev: `upto 50000`}, image: "" },
                { title: "REST API (BACKEND)", features: ["Clean Code", "Your Choice Logic", "Full Secure", "Scalable", "Modren Tech"], pricing: {exact:11999, prev: 15000}, image: "" },

              ]).map((ele, ind) => {

                return <div key={ind} className="pricing-block my-1 mx-1 rounded-md border border-1 dark:border-gray-300 border-gray-600 w-[300px] p-1 ">
                  <Image src={"/images/hero.jpg"} width={300} height={300} className='w-full h-[300px] rounded-md' alt='pricing picture' />

                  <div className="content px-1 w-full my-2">
                    <h3 className="text-xl font-bold">{ele.title}</h3>
                    <hr />
                    <h4 className="text-lg text-pink-600 font-bold my-2">Features</h4>
                    <ul className='pricinglist my-1 '>
                      {ele.features.map((li, index) => {
                        return <li key={index}>{li}</li>
                      })}

                    </ul>

                    <hr />
                    <div className="Pricing my-1">
                      <h4 className='text-lg text-pink-600 font-bold my-2'>Pricing</h4>
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <span className="dark:text-white text-black text-sm">PKR {ele.pricing.exact}</span>
                        <span className="dark:text-gray-400 line-through text-sm">PKR {ele.pricing.prev}</span>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }


          </div>



        </div>
      </section>

    </article>
  )
}

export default page
