import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "B.Sc",
    institution: "Calcutta University",
    year: "2018",
    type: "Bachelor's Degree"
  },
  {
    degree: "XIIth",
    institution: "Bengali / Bangla",
    year: "2014",
    type: "Higher Secondary"
  },
  {
    degree: "Xth",
    institution: "Bengali / Bangla",
    year: "2012",
    type: "Secondary"
  }
];

const certifications = [
  "Microsoft Excel - Advanced Excel Formulas & Functions",
  "Microsoft Power BI - Up & Running With Power BI Desktop",
  "Statistics for Data Science and Business Analysis",
  "Data Science in Python: Data Prep & EDA",
  "HackerRank Certificate SQL Advanced",
  "Full Stack Artificial Intelligence & ML Masters Program"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-primary">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.type}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Certifications
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-primary mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 