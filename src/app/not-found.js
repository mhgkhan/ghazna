import Link from 'next/link';
import React from 'react'
import { FaHome } from 'react-icons/fa';

const notFound = () => {
  return (
    <article className='w-full min-h-screen page'>
        <section className="main w-full">
            <div className='container mx-auto'>
                <div className="content py-10  flex items-center justify-center flex-col">
                    <h1 className='md:text-5xl text-3xl font-bold text-center mx-auto '>PAGE NOT FOUND</h1>
                    <p className='my-3 dark:text-gray-300 text-gray-700 text-center'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam, exercitationem sint fugit debitis, laboriosam laborum ratione repellendus doloremque dolorem ipsa tempora. Repudiandae porro id, impedit eveniet aut illo dolorem magni iste deserunt sed perspiciatis natus, officia maiores vel, fugit excepturi totam hic aspernatur corporis illum? Placeat dolore ad asperiores maiores quam itaque perspiciatis odio, libero a laboriosam. Quasi id porro blanditiis deleniti laborum ab nemo beatae dolor rerum. Excepturi consequatur nam ullam corporis id similique nobis accusamus eius itaque? Voluptatibus amet, alias nesciunt ad laboriosam id dolorem reprehenderit veniam quibusdam neque dolor. Quisquam dignissimos iste ipsa vel quod architecto nemo quibusdam nulla, magni maxime minus. Odio ipsa sed excepturi tempora vitae minima harum animi inventore! Quos iure quo enim in omnis quod atque a culpa dolorum, sapiente incidunt rem consequuntur minus dignissimos asperiores repudiandae amet at corrupti. Sunt, enim at, rerum itaque, omnis minus nisi quod dolor eveniet earum harum sit praesentium quaerat temporibus ea fugit pariatur recusandae error deleniti dolorum. Voluptatibus temporibus quibusdam ex distinctio, sequi saepe veniam eum ducimus quaerat repellendus excepturi eligendi, rerum corrupti consequuntur eius asperiores ipsa, neque rem quo. Dignissimos fuga expedita eum, voluptate consequuntur harum saepe nihil, ipsum aliquid nisi illo, officiis quia.
                    </p>
                    <div className="links my-5">
                        <h2 className='text-2xl font-bold text-center mx-auto'>Quick Links</h2>
                        <div className="links flex items-center justify-center gap-5 flex-wrap my-2">
                          <Link href="/" className="text-blue-500 font-bold flex items-center justify-center flex-col gap-2 p-2"><span className="text-xl dark:text-white text-black"><FaHome /> </span>HOME</Link>
                          {/* <Link href="/about" className="text-blue-500 font-bold flex items-center justify-center flex-col gap-2 p-2"><span className="text-xl dark:text-white text-black"><FaHome /> </span>ABOUT</Link> */}
                    </div>
                </div>
            </div>
        </section>
    </article>
  )
}

export default notFound;
