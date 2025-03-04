import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-blue-600">MadRocket</Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/students">Students Page</Link>
            
            <div className="flex items-center space-x-3 ml-4">
              <Link to="/login"> <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5" />
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
