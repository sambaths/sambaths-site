'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-2xl w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <p className="text-lg mb-6 text-center">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-4 text-blue-500" />
            <a href="mailto:sambaths1@outlook.com" className="text-lg hover:text-blue-500">sambaths1@outlook.com</a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-2xl mr-4 text-blue-500" />
            <a href="https://www.linkedin.com/in/sambath0009" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-500">linkedin.com/in/sambaths</a>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-2xl mr-4 text-blue-500" />
            <a href="https://github.com/sambaths" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-500">github.com/sambath0009</a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}