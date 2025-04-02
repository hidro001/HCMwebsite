import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5 select-none">
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-4 -mx-4 rounded transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="mt-4 px-4 py-5 text-gray-600 bg-gray-50 rounded">
          <p className="text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const HumanMaximizerFAQ = () => {
  const faqData = [
    {
      question: 'What does Human Maximizer do?',
      answer: 'Human Maximizer is a cloud-based HR software that helps organizations manage their entire employee lifecycle, from recruitment to offboarding, with tools for tracking applicants, managing employee information, performance reviews, and more.'
    },
    {
      question: 'Does Human Maximizer do payroll?',
      answer: 'Yes, Human Maximizer offers integrated payroll services that streamline the payroll process, ensuring accurate and timely payments while maintaining compliance with local tax regulations.'
    },
    {
      question: 'How much does Human Maximizer cost?',
      answer: 'Human Maximizer offers tiered pricing based on the number of employees and features needed. They typically provide custom quotes after understanding your specific organizational requirements.'
    },
    {
      question: 'How many countries is Human Maximizer in?',
      answer: 'Human Maximizer supports HR operations in multiple countries, with robust capabilities for international teams, offering localization and compliance features for various regions.'
    },
    {
      question: 'Is your support team outsourced?',
      answer: 'Human Maximizer prides itself on having an in-house support team dedicated to providing high-quality, personalized customer service directly from their main offices.'
    },
    {
      question: 'Is Human Maximizer a PEO?',
      answer: 'No, Human Maximizer is not a Professional Employer Organization (PEO). They are a software platform that provides HR management tools, but do not act as a co-employer.'
    },
    {
      question: "Where's my data housed? How secure is Human Maximizer?",
      answer: 'Human Maximizer uses secure, cloud-based servers with robust encryption, regular security audits, and compliance with international data protection standards to ensure the highest level of data security and privacy.'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about Human Maximizer and how it can help your organization streamline HR processes.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanMaximizerFAQ;