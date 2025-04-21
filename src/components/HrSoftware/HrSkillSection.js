import React, { useState } from 'react';

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: 'Employee Data Management',
      icon: '📄',
      description: 'Aenean venenatis scelerisque enim, in blandit ex pulvinar a. Mauris commodo lacus vel urna posuere tempor.',
    },
    {
      id: 2,
      title: 'Leave Management',
      icon: '⬅️',
      description: 'Master styling with CSS3 including flexbox, grid, animations, and responsive design techniques.',
    },
    {
      id: 3,
      title: 'Task Management',
      icon: '🔍',
      description: 'Learn modern web development practices including responsive design, API integration, and performance optimization.',
    },
    {
      id: 4,
      title: 'Performance Management',
      icon: '🖼️',
      description: 'Develop an eye for design with UX/UI principles, color theory, typography, and creating visually appealing interfaces.',
    },
    {
      id: 5,
      title: 'Payroll Management',
      icon: '📊',
      description: 'Master advanced styling techniques for spreadsheets and data presentation with conditional formatting and charts.',
    },
    {
      id: 6,
      title: 'Reports & Analytics',
      icon: '📱',
      description: 'Create layouts that adapt to different screen sizes and devices using responsive design principles.',
    },
    {
      id: 7,
      title: 'Assets Management',
      icon: '🔄',
      description: 'Learn to migrate static sites to WordPress CMS, create custom themes, and optimize for performance.',
    },
    {
      id: 8,
      title: 'Productivity Lens',
      icon: '✏️',
      description: 'Master content management including updating, formatting, and optimizing website content effectively.',
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto select-none">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Services You will get</h2>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        The Human Maximizer works as a Employee Data Management, Synergy, Leave Management, Attendance Management, Payroll Management Section.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-gray-200">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              backgroundColor: hoveredId === skill.id ? '#4788d6' : 'white',
              color: hoveredId === skill.id ? 'white' : '#2563eb', // text-blue-600
            }}
            className="relative border border-gray-100 transition-all duration-300"
          >
            <div className="p-8 h-48 flex flex-col items-center justify-center">
              {hoveredId === skill.id ? (
                <p className="text-center">{skill.description}</p>
              ) : (
                <>
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-center">{skill.title}</h3>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
