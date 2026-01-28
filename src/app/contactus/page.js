'use client';

import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import ContactusForm from '@/components/ui/ContactusForm';
import HeadingSection from '@/components/ui/HeadingSection';

const ContactUsPage = () => {
  const socialLinks = [
    { icon: <FaTwitter />, text: "@mhghazna", link: "https://x.com/mhghazna", color: "text-blue-500" },
    { icon: <FaInstagram />, text: "@mhgkhan", link: "https://instagram.com/mhgkhan", color: "text-pink-500" },
    { icon: <FaFacebook />, text: "@mhghazna", link: "https://facebook.com/mhghazna", color: "text-blue-500" },
    { icon: <FaLinkedin />, text: "@mhghazna", link: "https://linkedin.com/in/ghznap/", color: "text-blue-500" },
    { icon: <FaGithub />, text: "@mhgkhan", link: "https://github.com/mhgkhan", color: "dark:text-white text-black" },
    { icon: <FaWhatsapp />, text: "@mhghazna", link: "https://wa.me/923251857693", color: "text-green-600" },
  ];

  const contactInfo = [
    { icon: <FaEnvelope className="text-2xl" />, title: "Email", value: "muhammadhasnainghazna@gmail.com", link: "mailto:muhammadhasnainghazna@gmail.com" },
    { icon: <FaPhone className="text-2xl" />, title: "WhatsApp", value: "+92 325 1857693", link: "https://wa.me/923251857693" },
    { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Location", value: "Pakistan", link: null },
    { icon: <FaClock className="text-2xl" />, title: "Response Time", value: "Within 24 hours", link: null },
  ];

  return (
    <main className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Have a question or want to collaborate? We'd love to hear from you. Reach out anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-3 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Media Section */}
      <section className="contact py-16 px-4 w-full">
        <div className="container mx-auto max-w-6xl">
          <HeadingSection start="Contact" end="Us" />
          <div className="my-12 flex items-start justify-center gap-8 p-3 md:flex-row flex-col-reverse w-full">
            {/* Contact Form */}
            <ContactusForm />

            {/* Social Media Icons Section */}
            <div className="social-medias md:w-[50%] space-y-6">
              <div>
                <h3 className="my-2 text-2xl font-bold dark:text-white text-gray-900">
                  Through Social Media
                </h3>
                <p className="dark:text-gray-200 text-gray-600">
                  Connect with me on online social media platforms. Feel free to reach out through any channel.
                </p>
              </div>

              <div className="accounts mt-5 flex items-center justify-start flex-wrap gap-2 w-full">
                {socialLinks.map((ele, ind) => (
                  <Link
                    key={ind}
                    href={ele.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="saccount-block flex items-center justify-center gap-2 rounded-md my-2 p-3 w-full md:w-[190px] border border-1 dark:border-white border-gray-900 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
                  >
                    <span className={`md:text-4xl text-2xl border-r border-1 border-gray-300 pr-3 ${ele.color}`}>
                      {ele.icon}
                    </span>
                    <span className="md:text-lg text-base dark:text-white text-gray-900 font-bold">
                      {ele.text}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Additional Information Box */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">
                  💡 Prefer Direct Message?
                </h4>
                <p className="text-blue-800 dark:text-blue-300 mb-4">
                  For quick queries, you can also send a direct message through any of the social media platforms above. I typically respond within 24 hours.
                </p>
                <ul className="space-y-2 text-blue-800 dark:text-blue-300 text-sm">
                  <li>✓ Questions about services</li>
                  <li>✓ Project inquiries</li>
                  <li>✓ Collaboration opportunities</li>
                  <li>✓ General feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <HeadingSection start="Find" end="Me" />
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-[500px]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Pakistan+(My%20Location)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Location Map"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently based in Pakistan, but available for remote collaboration worldwide.
            </p>
            <Link
              href="https://maps.apple.com/?address=Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Open in Maps
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 w-full">
        <div className="container mx-auto max-w-4xl">
          <HeadingSection start="Frequently" end="Asked" />
          <div className="mt-12 space-y-4">
            {[
              {
                q: "What is the best way to contact you?",
                a: "You can use the contact form above, email me directly, or reach out through any social media platform. For urgent matters, WhatsApp is the fastest option.",
              },
              {
                q: "How quickly will I get a response?",
                a: "I aim to respond to all inquiries within 24 hours. For urgent matters, WhatsApp usually gets a faster response.",
              },
              {
                q: "Do you offer freelance services?",
                a: "Yes! I'm available for freelance projects including web development, UI/UX design, and consultation. Let's discuss your project needs.",
              },
              {
                q: "Can we schedule a call or meeting?",
                a: "Absolutely! After initial contact, we can arrange a call or video meeting to discuss your project in detail. Just mention your preference in the contact form.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. We'll discuss your requirements and provide a realistic timeline during our initial conversation.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, I provide post-launch support and maintenance services. Details can be discussed based on your specific needs.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 dark:text-white cursor-pointer select-none">
                  <span>{faq.q}</span>
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you have a question, want to discuss a project, or just want to say hello — I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              onClick={() => document.querySelector('.contactus-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Fill the Form
            </Link>
            <a
              href="mailto:muhammadhasnainghazna@gmail.com"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
