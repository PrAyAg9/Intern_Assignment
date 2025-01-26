import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.3'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Hi Viewer, It's Nice to see you.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          First Assignment for Madrocket Technologies, It's just a demo, I can do a lot better if you give me a chance, I bet
        </p>
      </div>
    </div>
  );
}