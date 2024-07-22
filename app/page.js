'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-2xl w-full text-center"
      >
        <Image
          src="/avatar.png"
          alt="Sambath S"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Sambath S</h1>
        <h2 className="text-2xl text-blue-600 mb-4">Data Science Professional</h2>
        <p className="text-lg mb-6">
          Seasoned Data Science Professional with 3+ years of experience in building innovative machine learning solutions and leading cross-functional teams.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
            >
              About Me
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
  );
}