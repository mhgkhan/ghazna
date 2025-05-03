import HeadingSection from '@/components/ui/HeadingSection'
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {

  const { plans } = await params;




  return (
    <article className='page w-full h-full py-10 md:px-4 px-2'>

      <section className='intro w-full my-5'>
        <div className='container mx-auto'>
          <h1 className="md:text-4xl text-3xl font-bold">Affordable Pricing Plans</h1>
          <p className='my-2 dark:text-gray-200 text-gray-700'>
            Choose from our flexible pricing plans tailored to meet your needs. Whether you're looking for any help, we've got you covered.
          </p>
        </div>
      </section>

      <br />
      <br />

      {
        plans == "webdevelopment" ? <section className="w-full my-5">
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
        </section> : plans == "graphicdesigning" ? <section className="w-full my-5">
          <div className='container mx-auto'>
            <HeadingSection start={"Plans For"} end={"Graphic Designing"} />
            <p className='my-2 text-center dark:text-gray-200 text-gray-700'>
              Creative visual solutions for your brand, social media, and business identity.
            </p>

            <div className="my-5 w-full flex items-center justify-center flex-wrap md:flex-row flex-col gap-5">
              {
                Array.from([
                  {
                    title: "Basic Design",
                    features: [
                      "1 Logo or 1 Social Media Post",
                      "Fast Delivery",
                      "1 Free Revision"
                    ],
                    pricing: { exact: 1000, prev: 1500 },
                    image: "/images/services/graphic-basic.png",
                    link: "/contact?service=graphic-basic"
                  },
                  {
                    title: "Standard Design Pack",
                    features: [
                      "Logo + 2 Social Posts + 1 Flyer",
                      "Modern Design Standards",
                      "2 Free Revisions"
                    ],
                    pricing: { exact: 2500, prev: 3500 },
                    image: "/images/services/graphic-standard.png",
                    link: "/contact?service=graphic-standard"
                  },
                  {
                    title: "Premium Branding Kit",
                    features: [
                      "Logo, Brand Kit, Social Media Kit",
                      "Full Brand Identity Design",
                      "Up to 4 Revisions"
                    ],
                    pricing: { exact: 5000, prev: 8000 },
                    image: "/images/services/graphic-premium.png",
                    link: "/contact?service=graphic-premium"
                  }
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
        </section> : plans == "dataentry" ? <section className="w-full my-5">
          <div className='container mx-auto'>
            <HeadingSection start={"Plans For"} end={"Data Entry"} />
            <p className='my-2 text-center dark:text-gray-200 text-gray-700'>
              Reliable and accurate data entry services for your business and academic needs.
            </p>

            <div className="my-5 w-full flex items-center justify-center flex-wrap md:flex-row flex-col gap-5">
              {
                Array.from(
                  [
                    {
                      title: "Basic Entry",
                      features: [
                        "Up to 50 Entries",
                        "Excel or Google Sheets",
                        "Simple Formatting"
                      ],
                      pricing: { exact: 500, prev: 800 },
                      image: "/images/services/data-basic.png",
                      link: "/contact?service=data-basic"
                    },
                    {
                      title: "Standard Entry",
                      features: [
                        "Up to 200 Entries",
                        "Formatted Tables",
                        "Verified Accuracy"
                      ],
                      pricing: { exact: 1500, prev: 2000 },
                      image: "/images/services/data-standard.png",
                      link: "/contact?service=data-standard"
                    },
                    {
                      title: "Premium Entry + Analysis",
                      features: [
                        "500+ Entries",
                        "Data Cleaning & Sorting",
                        "Chart & Report Generation"
                      ],
                      pricing: { exact: 3000, prev: 4500 },
                      image: "/images/services/data-premium.png",
                      link: "/contact?service=data-premium"
                    }
                  ]
                ).map((ele, ind) => {

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
        </section> : plans == "printing" ? <section className="w-full my-5">
          <div className='container mx-auto'>
            <HeadingSection start={"Plans For"} end={"Printing"} />
            <p className='my-2 text-center dark:text-gray-200 text-gray-700'>
              High-quality printing services including business cards, flyers, brochures, and more — perfect for businesses, events, and branding.
            </p>

            <div className="my-5 w-full flex items-center justify-center flex-wrap md:flex-row flex-col gap-5">
              {
                Array.from([
                  {
                    title: "Basic Prints",
                    features: ["100 Business Cards or Flyers", "Standard Paper", "Basic Design Included"],
                    pricing: { exact: 1500, prev: 2000 },
                    image: "/images/services/print-basic.png"
                  },
                  {
                    title: "Standard Prints",
                    features: ["100 Color Brochures or Posters", "Premium Quality Print", "Design & Proofing"],
                    pricing: { exact: 3500, prev: 5000 },
                    image: "/images/services/print-standard.png"
                  },
                  {
                    title: "Premium Bulk Printing",
                    features: ["500+ Items", "Custom Material (Glossy, Matte)", "Design + Fast Delivery"],
                    pricing: { exact: 7000, prev: 10000 },
                    image: "/images/services/print-premium.png"
                  }
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
        </section> : ""
      }

    </article>
  )
}

export default page;
