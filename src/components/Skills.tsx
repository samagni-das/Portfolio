import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Data Analysis",
    items: ["Power BI", "Advanced Excel", "Data Visualization", "Statistical Analysis", "Predictive Modeling"]
  },
  {
    category: "Programming & Databases",
    items: ["Python", "SQL", "MySQL", "Google Apps Script", "API Integration"]
  },
  {
    category: "Machine Learning & AI",
    items: ["Natural Language Processing", "Deep Learning", "Generative AI", "Time Series Analysis", "Machine Learning"]
  },
  {
    category: "Tools & Technologies",
    items: ["Process Automation", "Data Management", "Data Science", "Business Intelligence", "Data Analytics"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Data Analysis", "Machine Learning", "Programming", "Business Intelligence"].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  <span className="text-primary font-semibold">90%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 