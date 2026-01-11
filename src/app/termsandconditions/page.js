import React from 'react'



export const metadata = {
    title: "Terms & Conditions || Ghazna.dev",
    description: "Read the terms and conditions of Ghazna.dev to understand the rules and regulations for using our services.",
    keywords: ["Terms and Conditions", "Ghazna.dev", "User Agreement", "Service Terms", "Legal Information"],
    robots: {
        index: true,
        follow: true,
    },
     canonical: "https://ghazna.online/termsandconditions",
}



const page = () => {
  return (
    <article 
      className='page w-full min-h-screen py-10 md:px-4 px-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
      lang="en"
    >
      <header className='mb-6 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold'>Terms and Conditions</h1>
        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2'>
          Last updated: March 25, 2025
        </p>
      </header>
      
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-pink-600'>Introduction</h2>
        <p className='text-base leading-relaxed'>
          Welcome to our Terms and Conditions page. By accessing or using our services, you agree to comply with and be bound by the following terms. Please read them carefully.
        </p>
      </section>
      
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-pink-600'>Use of Our Services</h2>
        <p className='text-base leading-relaxed'>
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the services.
        </p>
      </section>
      
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-pink-600'>Intellectual Property</h2>
        <p className='text-base leading-relaxed'>
          All content, trademarks, and data on this website, including but not limited to text, graphics, and logos, are the property of their respective owners and are protected by applicable laws.
        </p>
      </section>
      
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-pink-600'>Limitation of Liability</h2>
        <p className='text-base leading-relaxed'>
          We are not liable for any damages arising from the use or inability to use our services. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
        </p>
      </section>
      
      <footer className='mt-10 text-center'>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          If you have any questions about these Terms and Conditions, please contact us.
        </p>
      </footer>
    </article>
  )
}

export default page
