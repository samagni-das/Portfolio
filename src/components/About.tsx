import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Data Analysis', level: 95 },
  { name: 'Power BI', level: 90 },
  { name: 'Python Data Analytics', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'API Integration', level: 80 },
  { name: 'Natural Language Processing', level: 75 },
  { name: 'Google Apps Script', level: 85 }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Profile</h3>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in data analysis and management, I specialize in 
                transforming raw data into compelling insights. My expertise spans across advanced 
                Excel functions, Power BI, SQL, and machine learning technologies.
              </p>
              <p className="text-gray-600">
                Currently working as a Senior Process Executive - Data Analyst at Cognizant, 
                I focus on developing automated solutions, creating interactive dashboards, 
                and implementing AI-driven analytics to drive business decisions.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3">Education</h4>
                <p className="text-gray-600">B.Sc from Calcutta University (2018)</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 