'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
            <p className="text-lg mb-4">
              With over 3 years of experience in the data science field, I&apos;ve had the opportunity to work on diverse projects that have honed my skills in machine learning, deep learning, and predictive modeling. My journey began at Wipro Limited, where I cut my teeth on complex data analysis and predictive modeling projects.
            </p>
            <p className="text-lg mb-4">
              Currently, I&apos;m thriving at Tiger Analytics, where I&apos;m a Data Scientist who leads data science team&apos;s to build cutting-edge global applications for Fortune 500 clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Beyond the Data</h2>
            <p className="text-lg mb-4">
              When I&apos;m not diving into datasets or building models, you can find me exploring the latest advancements in AI and machine learning. I&apos;m particularly fascinated by the potential of AI in healthcare and am always eager to discuss how we can leverage technology to improve patient outcomes.
            </p>
            <p className="text-lg mb-4">
              I&apos;m also passionate about mentoring and knowledge sharing. Whether it&apos;s conducting training sessions for my team or contributing to data science communities, I believe in the power of collective growth and learning. I regularly participate in hackathons and data science competitions, not just for the thrill of solving complex problems, but also to stay at the forefront of emerging techniques and technologies.
            </p>
            <p className="text-lg mb-4">
            Outside of the tech world, I&apos;m an avid reader of all kinds of books (I might read almost anything if its captivating !!). I enjoy contemplating how the principles and ideas from the books might shape the real-world applications of AI and data science and many more. This interdisciplinary approach often leads to novel ideas and creative solutions in my professional work.
            </p>
          </section>

          <div className="flex justify-center space-x-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                Home
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}