import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Predictive Modeling for Type 1 Diabetes Risk Assessment',
    description: 'Developed a robust predictive model for identifying Type 1 diabetes risk in prediabetic patients before clinical trial enrollment.',
    duration: '61 Days',
    highlights: [
      'Data gathering and preprocessing of lifestyle, medical history, and biomarkers',
      'Exploratory data analysis and feature engineering',
      'Machine learning model development and optimization',
      'Model validation and deployment strategy',
      'Monitoring system implementation'
    ],
    technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Predictive Modeling']
  },
  {
    title: 'Productivity Enhancement through Automation',
    description: 'Spearheaded an automation project for itemized billing bot automation, significantly improving productivity and accuracy.',
    duration: '4 Months',
    highlights: [
      'Automated repetitive billing processes',
      'Implemented quality control measures',
      'Reduced processing time by 60%',
      'Enhanced accuracy to 99.9%',
      'Streamlined workflow integration'
    ],
    technologies: ['Power BI', 'Google Apps Script', 'Process Automation', 'API Integration']
  },
  {
    title: 'Healthcare Claims Analysis System',
    description: 'Developed comprehensive analytics system for US healthcare claims processing and analysis.',
    duration: '6 Months',
    highlights: [
      'Manual pricing verification',
      'Denial reason analysis',
      'Claims audit automation',
      'Provider dispute resolution',
      'Performance dashboard creation'
    ],
    technologies: ['SQL', 'Power BI', 'Data Analysis', 'Healthcare Analytics']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 