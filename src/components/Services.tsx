import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaRobot, FaChartLine, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: <FaDatabase className="w-12 h-12 text-blue-600" />,
    title: "Data Management Solutions",
    description: "Comprehensive data management services including data cleaning, organization, and storage optimization. Implement robust database solutions and data governance frameworks.",
    features: [
      "Database design and optimization",
      "Data cleaning and validation",
      "Data integration and migration",
      "Data quality management",
      "Custom database solutions"
    ]
  },
  {
    icon: <FaRobot className="w-12 h-12 text-blue-600" />,
    title: "AI Solutions",
    description: "Custom AI solutions to automate processes, gain insights, and make data-driven decisions. From machine learning models to natural language processing applications.",
    features: [
      "Machine learning model development",
      "Natural Language Processing",
      "Predictive analytics",
      "AI-powered automation",
      "Computer vision solutions"
    ]
  },
  {
    icon: <FaCogs className="w-12 h-12 text-blue-600" />,
    title: "Data Flow Automation",
    description: "End-to-end automation solutions to streamline your data workflows, reduce manual effort, and increase efficiency in your business processes.",
    features: [
      "Workflow automation",
      "Process optimization",
      "ETL pipeline development",
      "Automated reporting",
      "System integration"
    ]
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-blue-600" />,
    title: "Analytics & Reporting",
    description: "Transform your raw data into actionable insights with comprehensive analytics and reporting solutions tailored to your business needs.",
    features: [
      "Business intelligence dashboards",
      "Custom reporting solutions",
      "Data visualization",
      "Performance metrics tracking",
      "Real-time analytics"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Offering professional freelance services in data management, AI solutions, and process automation. Let's transform your data into actionable insights.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 