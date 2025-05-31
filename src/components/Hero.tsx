import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Samagni Das</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Senior Process Executive - Data Analyst
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Data whiz with a knack for storytelling! I leverage my expertise in data management, 
            analysis, and visualization to extract meaningful insights and drive informed decisions.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:samagni1235@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/samagni-das-a3084820a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 