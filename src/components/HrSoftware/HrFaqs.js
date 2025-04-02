import React, { useState } from 'react';

const FAQSection = () => {
  // State to track which answer is visible
  const [activeAnswer, setActiveAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setActiveAnswer((prevActiveAnswer) => (prevActiveAnswer === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto mb-10 pt-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAnswer('answer-1')}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              Why is Employee Data Management important?
            </span>
            <span className="text-2xl text-blue-500">
              {activeAnswer === 'answer-1' ? '−' : '+'}
            </span>
          </button>
          {activeAnswer === 'answer-1' && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-gray-700">
                Employee Data Management is important as it ensures HR teams can store, access, and update
                employee records efficiently while maintaining compliance with labor laws.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAnswer('answer-2')}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              How does Employee Data Management improve security?
            </span>
            <span className="text-2xl text-blue-500">
              {activeAnswer === 'answer-2' ? '−' : '+'}
            </span>
          </button>
          {activeAnswer === 'answer-2' && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-gray-700">
                It helps to protect sensitive employee information through entering data, having access to
                controls, audit logs, and compliance with data protection laws like GDPR.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAnswer('answer-3')}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              How does automation improve Employee Data Management?
            </span>
            <span className="text-2xl text-blue-500">
              {activeAnswer === 'answer-3' ? '−' : '+'}
            </span>
          </button>
          {activeAnswer === 'answer-3' && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-gray-700">
                Automation prevents manual errors, speeds up HR processes, and ensures real-time data updates to
                make decisions.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAnswer('answer-4')}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              Can Human Maximizer integrate with existing HR systems?
            </span>
            <span className="text-2xl text-blue-500">
              {activeAnswer === 'answer-4' ? '−' : '+'}
            </span>
          </button>
          {activeAnswer === 'answer-4' && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-gray-700">
                Yes, Human Maximizer seamlessly integrates with payroll, benefits, and other HR platforms,
                ensuring smooth data flow across systems.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 5 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAnswer('answer-5')}
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              How does Employee Self-Service benefit organizations?
            </span>
            <span className="text-2xl text-blue-500">
              {activeAnswer === 'answer-5' ? '−' : '+'}
            </span>
          </button>
          {activeAnswer === 'answer-5' && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-gray-700">
                It reduces HR workload by allowing employees to update their information, track attendance, and
                access payroll details independently.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
