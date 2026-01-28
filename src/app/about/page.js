'use client';

import React from 'react';
import { FaCode, FaLaptop, FaRocket, FaUsers, FaGraduationCap, FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import HeadingSection from '@/components/ui/HeadingSection';

const AboutPage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript/ES6+', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'JWT Auth', 'RESTful APIs'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'Vercel', 'VS Code', 'Figma', 'Terminal'] },
  ];

  const features = [
    {
      icon: <FaBlog className="text-4xl text-blue-500" />,
      title: 'Dynamic Blog Platform',
      description: 'A powerful blogging system where users can create, share, and interact with engaging content.',
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: 'User Management',
      description: 'Secure authentication with JWT, profile management, and community interaction features.',
    },
    {
      icon: <FaRocket className="text-4xl text-purple-500" />,
      title: 'Modern Architecture',
      description: 'Built on Next.js for optimal performance, SEO, and scalability.',
    },
    {
      icon: <FaLaptop className="text-4xl text-pink-500" />,
      title: 'Responsive Design',
      description: 'Seamless experience across all devices with mobile-first approach and dark mode support.',
    },
  ];

  const milestones = [
    { year: '2024', title: 'Project Started', description: 'Began developing Ghazna as a personal portfolio and blogging platform.' },
    { year: '2025', title: 'Major Features', description: 'Implemented comprehensive user management and blog system with advanced features.' },
    { year: '2026', title: 'Live & Growing', description: 'Platform is now live and continuously evolving with new features and improvements.' },
  ];

  return (
    <main className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Ghazna</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A modern portfolio and blogging platform showcasing creativity, technology, and knowledge sharing
            </p>
          </div>
        </div>
      </section>

      {/* About Ghazna Website Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <HeadingSection start="About" end="This Website" />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Ghazna</strong> is a modern, full-stack web application designed as a personal portfolio and comprehensive blogging platform. Built with cutting-edge technologies, it combines elegance with functionality to create an engaging digital space.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The platform enables users to create and share engaging blog posts, interact with content through comments and reactions, explore different topics through tags, and build meaningful connections within the community.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you're looking to read inspiring stories, discover technical insights, or showcase your own work, Ghazna provides the perfect space for expression and collaboration.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4">Platform Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500" />
                    <span>Advanced Blog Management System</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500" />
                    <span>Secure User Authentication & Profiles</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500" />
                    <span>Interactive Comments & Reactions</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500" />
                    <span>Tag-based Content Organization</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-500" />
                    <span>Responsive & Dark Mode Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <HeadingSection start="About" end="Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-1 shadow-xl">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Muhammad Hasnain</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Pakistan</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi! I'm <strong>Muhammad Hasnain (Ghazna)</strong>, a passionate full-stack developer with a keen interest in building modern, scalable web applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With expertise in frontend technologies like React and Next.js, combined with strong backend skills using Node.js and MongoDB, I create seamless digital experiences that users love.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in clean code, continuous learning, and building products that make a difference. When I'm not coding, I enjoy sharing knowledge, exploring new technologies, and connecting with fellow developers.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/mhgkhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:shadow-lg transition-shadow font-semibold">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/ghznap/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow font-semibold">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <HeadingSection start="Platform" end="Features" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <HeadingSection start="My" end="Skills" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FaCode className="text-blue-500" /> {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Milestones Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <HeadingSection start="My" end="Journey" />
          <div className="mt-12 space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <span className="text-white font-bold text-xl">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <HeadingSection start="Technology" end="Stack" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>Tailwind CSS</li>
                <li>React Icons</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🗄️</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Backend</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
                <li>Nodemailer</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Deployment</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Vercel</li>
                <li>Git & GitHub</li>
                <li>CI/CD Ready</li>
                <li>Environment Config</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect & Collaborate</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Want to discuss technology? I'm always excited to connect with fellow developers and creative minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactus" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow">
              <FaEnvelope /> Get In Touch
            </Link>
            <a href="https://github.com/mhgkhan/ghazna" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center flex-wrap">
            <a href="mailto:muhammadhasnainghazna@gmail.com" className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaEnvelope className="text-2xl" />
              <span>muhammadhasnainghazna@gmail.com</span>
            </a>
            <a href="https://github.com/mhgkhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaGithub className="text-2xl" />
              <span>@mhgkhan</span>
            </a>
            <a href="https://linkedin.com/in/ghznap/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-2xl" />
              <span>Ghazna</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

// Custom icon for blog
const FaBlog = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.2-.24-.58-.27-.85-.07-.27.2-.3.58-.1.85L10.63 17c.15.2.4.31.65.31.25 0 .5-.11.65-.31l3.29-4.04c.2-.27.16-.65-.11-.85-.27-.2-.65-.16-.85.1z"/>
  </svg>
);

export default AboutPage;
