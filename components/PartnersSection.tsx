
import React from 'react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 max-w-3xl mx-auto">
          Our Alumni Are Currently Studying & Working at World-Class Institutions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale">
          {['UCL', 'Stanford', 'Sydney Uni', 'Toronto', 'Melbourne', 'McGill', 'Berkeley', 'NUS Singapore', 'King\'s College', 'Imperial', 'Yale', 'ETH Zurich'].map((brand) => (
            <div key={brand} className="text-xl font-black p-4 border border-gray-200 rounded flex items-center justify-center">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
