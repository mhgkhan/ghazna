import HeadingSection from '@/components/ui/HeadingSection'
import Image from 'next/image';
import React from 'react';

const page = async () => {
  return (
    <article className='page w-full h-full py-10 md:px-4 px-2'>

      <section className='intro w-full my-5'>
        <div className='container mx-auto'>
          <h1 className="md:text-4xl text-3xl font-bold">Affordable Pricing Plans</h1>
          <p className='my-2 dark:text-gray-200 text-gray-700'>
            Choose from our flexible pricing plans tailored to meet your web development needs. Whether you're looking for a simple static website or a full-stack solution, we've got you covered.
          </p>
        </div>
      </section>

      <br />
      <br />

      <section className="w-full my-5">
        <div className='container mx-auto'>
          <HeadingSection start={"Plans For"} end={"Web Development"} />
          <p className='my-2 text-center dark:text-gray-200 text-gray-700'>
            Explore our transparent and competitive pricing options designed to deliver value and quality.
          </p>

          <div className="my-5 w-full flex items-center justify-center flex-wrap md:flex-row flex-col gap-5">
            {
              Array.from([
                { 
                  title: "Static Website", 
                  features: ["Responsive Design", "Modern UI", "Up to 5 Pages", "Basic Functionality"], 
                  pricing: { exact: 5999, prev: 10000 }, 
                  image: "/images/services/static.png" 
                },
                { 
                  title: "Full Stack Website", 
                  features: ["Responsive Design", "Modern UI", "Unlimited Pages", "Advanced Functionality", "Modern Tech Stack", "Scalable Architecture", "User Authentication", "Custom Business Logic", "BMS & CMS Integration", "Deployment Support"], 
                  pricing: { exact: `upto 20000`, prev: `upto 50000` }, 
                  image: "/images/services/fullstack.png" 
                },
                { 
                  title: "REST API (Backend)", 
                  features: ["Clean Code", "Custom Business Logic", "Full Security", "Scalable Architecture", "Modern Tech Stack"], 
                  pricing: { exact: 11999, prev: 15000 }, 
                  image: "/images/services/restapi.png" 
                },
              ]).map((ele, ind) => {

                return <div key={ind} className="pricing-block my-1 mx-1 rounded-md border border-1 dark:border-gray-300 border-gray-600 w-[300px] p-1">
                  <Image 
                    src={ele.image} 
                    width={300} 
                    height={300} 
                    className='max-w-full w-auto mx-auto max-h-[200px] h-auto rounded-md' 
                    alt={`${ele.title} pricing plan`} 
                  />

                  <div className="content px-1 w-full my-2">
                    <h3 className="text-xl font-bold">{ele.title}</h3>
                    <hr />
                    <h4 className="text-lg text-pink-600 font-bold my-2">Features</h4>
                    <ul className='pricinglist my-1'>
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

export default page;
