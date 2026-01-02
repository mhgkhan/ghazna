import HeadingSection from '@/components/ui/HeadingSection'
import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


export const metadata = {
  title: "Our Plans || Services Pricing",
  description: "Explore our plans and pricing for services. Find the perfect plan that suits your needs with transparent pricing and detailed features.",
  keywords: ["plans", "pricing", "services", "subscription plans", "service pricing", "affordable plans"],
  author: "Your Company Name",
  viewport: "width=device-width, initial-scale=1.0",
  canonical: "https://ghazna.ercel.app/plans",
  robots: {
    index: true,
    follow: true,
  },
}




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
                    image: "/images/plans/logodesign.png",
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
                    image: "/images/plans/logodesign.png",
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
                    image: "/images/plans/logodesign.png",
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
                      title: "Online Data Entry",
                      features: [
                        "Google Docs data entry",
                        "Google Sheets data entry",
                        "Online form filling",
                        "Web portal data entry",
                        "CRM / CMS data entry",
                        "Copy-paste & manual entry",
                        "Real-time collaboration"
                      ],
                      pricing: { exact: 600, prev: 800 },
                      image: "/images/plans/dataentry/online.jpg",
                      link: "/contact?service=data-basic",
                      whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Online%20Data%20Entry%20plan."
                    },
                    {
                      title: "Smart Data Management",
                      features: [
                        "Data cleaning & formatting",
                        "Duplicate removal",
                        "Data sorting & filtering",
                        "Basic Excel formulas",
                        "Google Sheets automation",
                        "File organization",
                        "Backup & version control",
                        "Quality assurance & error checking"
                      ],
                      pricing: { exact: 2000, prev: 3000 },
                      image: "/images/plans/dataentry/management.jpg",
                      link: "/contact?service=data-standard",
                      whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Smart%20Data%20Management%20plan."
                    },
                    {
                      title: "Offline Data Entry",
                      features: [
                        "Handwritten & printed documents",
                        "MS Word document typing",
                        "MS Excel data entry",
                        "MS Access entries",
                        "PDF to Word / Excel conversion",
                        "Scanned document typing",
                        "Formatting & alignment included"
                      ],
                      pricing: { exact: 250, prev: 500 },
                      image: "/images/plans/dataentry/offline.jpg",
                      link: "/contact?service=data-premium",
                      whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Offline%20Data%20Entry%20plan."
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
                        <h4 className='text-lg text-pink-600 font-bold my-2'>Pricing By Hour/Page</h4>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <span className="dark:text-white text-black text-sm">PKR {ele.pricing.exact}</span>
                          <span className="dark:text-gray-400 line-through text-sm">PKR {ele.pricing.prev}</span>
                        </div>
                          <a href={ele.whatsappLink} className="md:text-5xl text-3xl text-green-500 mx-2"> <FaWhatsapp /> </a>
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
                    title: "Photocopies BK",
                    features: ["Clean Copies", "Best Page (Copymate)", "Fast Service", " Black & White", "Any Size", "Single Sided", "Unlimited Pages", "Per Page Pricing"],
                    pricing: { exact: 10, prev: 20 },
                    image: "/images/plans/printing/cp.png",
                    whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Photocopies%20BK%20printing%20plan."
                  },
                  {
                    title: "Color Printing",
                    features: ["Clean Color Prints", "High Quality", "A4,Legal,Double A Page", "Fast Service", "Any Size", "Double Sided", "Unlimited Pages", "Per Page Pricing"],
                    pricing: { exact: 30, prev: 40 },
                    image: "/images/plans/printing/printer.png",
                    whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Color%20Printing%20plan."
                  },
                  {
                    title: "Images, Sticker, Certificate Printings",
                    features: ["Passport size image printing", "Full size image printing", "Certificate printing", "High Quality", "Fast Service"],
                    pricing: { exact: 120, prev: 150 },
                    image: "/images/plans/printing/images.png",
                    whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20Images,%20Sticker,%20Certificate%20Printings%20plan."
                  },
                  {
                    title: "PVC Card, Student, Service Cards",
                    features: ["High-quality PVC card printing", "Student Card", "Service Card", "Passing Card", "Durable and professional finish", "Custom designs available", "Fast Service"],
                    pricing: { exact: 200, prev: 250 },
                    image: "/images/plans/printing/cards.png",
                    whatsappLink: "https://wa.me/923275575094?text=I%20am%20interested%20in%20the%20PVC%20Card,%20Student,%20Service%20Cards%20printing%20plan."
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
                        <h4 className='text-lg text-pink-600 font-bold my-2'>Pricing Per Item</h4>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <span className="dark:text-white text-black text-sm">PKR {ele.pricing.exact}</span>
                            <span className="dark:text-gray-400 text-gray-500 line-through text-sm">PKR {ele.pricing.prev}</span>
                          </div>
                          <a href={ele.whatsappLink} className="md:text-5xl text-3xl text-green-500 mx-2"> <FaWhatsapp /> </a>
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
