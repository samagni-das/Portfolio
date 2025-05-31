import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Samagni Das. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Data Analyst | Process Executive | Machine Learning Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
} 