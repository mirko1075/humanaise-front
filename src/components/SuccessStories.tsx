import React from 'react';

const stories = [
  {
    company: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3',
    quote: 'AutomateAI helped us reduce customer response time by 75% with their intelligent chatbot solution.',
    author: 'Sarah Johnson',
    role: 'CTO',
  },
  {
    company: 'Global Logistics',
    image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?ixlib=rb-4.0.3',
    quote: 'Their workflow automation system saved us over 1000 work hours per month.',
    author: 'Michael Chen',
    role: 'Operations Director',
  },
  {
    company: 'RetailPro',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3',
    quote: 'The AI-powered analytics platform helped us increase sales by 40% in just 3 months.',
    author: 'Emma Thompson',
    role: 'Marketing Manager',
  },
];

export default function SuccessStories() {
  return (
    <div id="success-stories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">
            See how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{story.author}</p>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="text-indigo-600">{story.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}