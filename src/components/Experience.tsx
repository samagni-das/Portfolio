import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Process Executive - Data Analyst",
    company: "Cognizant",
    period: "May 2024 - Present",
    description: [
      "Data Analysis and Reporting using Microsoft Excel, Power BI",
      "Database Management with SQL",
      "Data Visualization and Dashboard Creation",
      "Cross-functional Team Collaboration",
      "Process Optimization and Automation"
    ]
  },
  {
    title: "MIS Data Analyst",
    company: "CDC Printers private limited",
    period: "Nov 2023 - May 2024",
    description: [
      "Developed insightful reports using Google Sheets and Power BI",
      "Optimized database queries using SQL",
      "Automated tasks using Google App Script",
      "Implemented API integrations and chatbot development",
      "Enhanced data capabilities and workflow efficiency"
    ]
  },
  {
    title: "MIS Analyst",
    company: "Wipro Enterprises",
    period: "Jun 2022 - Nov 2023",
    description: [
      "Created meaningful dashboards in Power BI",
      "Managed daily reports including production and quality metrics",
      "Analyzed data for process improvement",
      "Provided actionable insights to stakeholders"
    ]
  },
  {
    title: "Subject Matter Expert",
    company: "Wipro Enterprises",
    period: "Jan 2019 - May 2022",
    description: [
      "Led team operations and inventory management",
      "Handled client communications and updates",
      "Managed performance reports and analytics",
      "Spearheaded automation projects for productivity enhancement",
      "Expertise in US healthcare claim processing"
    ]
  }
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 