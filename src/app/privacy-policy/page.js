import React from 'react'



export const metadata = {
    title:"Privacy-Policy || Ghazna.dev",
    description: "Read the privacy policy of Ghazna.dev to understand how we handle your data and ensure your privacy.",
    keywords: ["Privacy Policy", "Ghazna.dev", "Data Privacy", "User Data", "Privacy Practices"],
    author: "Ghazna.dev",
   robots: {
    index: true,
    follow: true,
  },
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
     alternates: {
    canonical: "https://ghazna.vercel.app/privacy-policy",
  },
}

const page = () => {
  return (
    <article className='page w-full h-full py-10 md:px-4 px-2 bg-gray-50 dark:bg-gray-800'>
      {/* Privacy Policy Page */}
      <section className='intro w-full my-5'>
        <div className='container mx-auto'>
          <h1 className="md:text-4xl text-3xl font-bold text-pink-600 text-center">Privacy Policy</h1>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            At our company, we are committed to protecting your privacy and ensuring that your personal information is handled with care. 
            This Privacy Policy explains the types of information we collect, how we use it, and the measures we take to safeguard your data. 
            By using our services, you agree to the practices described in this policy.
          </p>
        </div>
      </section>

      <section className='data-collection w-full my-10'>
        <div className='container mx-auto'>
          <h2 className="md:text-3xl text-2xl font-semibold text-pink-600">Information We Collect</h2>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            We collect information that you provide directly to us, such as your name, email address, and any other details you share when 
            signing up for our services or contacting us. Additionally, we may gather data about your interactions with our website, including 
            your IP address, browser type, and usage patterns, to enhance your experience and improve our offerings.
          </p>
        </div>
      </section>

      <section className='data-usage w-full my-10'>
        <div className='container mx-auto'>
          <h2 className="md:text-3xl text-2xl font-semibold text-pink-600">How We Use Your Information</h2>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            The information we collect is used to provide and improve our services, personalize your experience, and communicate with you 
            effectively. For example, we may use your email address to send you updates, respond to your inquiries, or notify you about 
            important changes to our policies. Rest assured, we do not sell or share your personal information with third parties for 
            marketing purposes.
          </p>
        </div>
      </section>

      <section className='data-protection w-full my-10'>
        <div className='container mx-auto'>
          <h2 className="md:text-3xl text-2xl font-semibold text-pink-600">How We Protect Your Information</h2>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            Protecting your data is our top priority. We implement robust security measures, including encryption, firewalls, and secure 
            servers, to prevent unauthorized access, alteration, or disclosure of your personal information. While we strive to ensure the 
            highest level of security, please note that no method of transmission over the internet is completely secure.
          </p>
        </div>
      </section>

      <section className='user-rights w-full my-10'>
        <div className='container mx-auto'>
          <h2 className="md:text-3xl text-2xl font-semibold text-pink-600">Your Rights</h2>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, 
            please contact us using the details provided below. We are committed to addressing your concerns promptly and ensuring that 
            your data is handled in accordance with applicable laws and regulations.
          </p>
        </div>
      </section>

      <section className='contact-us w-full my-10'>
        <div className='container mx-auto'>
          <h2 className="md:text-3xl text-2xl font-semibold text-pink-600">Contact Us</h2>
          <p className='my-4 dark:text-gray-200 text-gray-700 text-justify leading-relaxed'>
            If you have any questions, concerns, or feedback regarding this Privacy Policy or our data practices, please do not hesitate 
            to reach out to us. You can contact us via email at <a href="mailto:muhammadhasnainghazna@gmail.com" className="text-pink-600 underline">muhammadhasnainghazna@gmail.com</a>. 
            We value your trust and are here to assist you with any inquiries you may have.
          </p>
        </div>
      </section>
    </article>
  )
}

export default page
