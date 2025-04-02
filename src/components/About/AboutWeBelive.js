import React from 'react';

const WeBelieveSection = () => {
  const beliefs = [
    {
      icon: '👥',
      text: 'That business is first and foremost about people',
      color: 'blue'
    },
    {
      icon: '❤️',
      text: 'That we can truly change the world',
      color: 'red'
    },
    {
      icon: '🚀',
      text: 'That relentless innovation is a way to be, not a choice',
      color: 'purple'
    },
    {
      icon: '🤝',
      text: 'That human connections and partnerships help break boundaries and help raise the bar',
      color: 'green'
    }
  ];

  return (
    <section className="pt-20 select-none">
      <div className="container w-full mx-40">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          We <span className="text-purple-600">Believe</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className={`
                bg-${belief.color}-50 
                border border-${belief.color}-200 
                rounded-lg 
                p-6 
                flex 
                flex-col 
                items-center 
                text-center 
                transition 
                duration-300 
                hover:shadow-lg 
                hover:scale-105
                group
              `}
            >
              <div
                className={`
                  w-16 
                  h-16 
                  bg-${belief.color}-500 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  text-3xl 
                  mb-4 
                  transition 
                  duration-300 
                  group-hover:bg-${belief.color}-600 
                  group-hover:text-white
                `}
              >
                <span className="text-white group-hover:text-white">{belief.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {belief.text.split(' ')[0]} {belief.text.split(' ')[1]}
              </h3>
              <p className="text-gray-600 text-sm">
                {belief.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeBelieveSection;