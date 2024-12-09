import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, FileText } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/', icon: <Home className="w-5 h-5" />, label: 'Início' },
    { to: '/planos', icon: <Dumbbell className="w-5 h-5" />, label: 'Planos' },
    { to: '/minha-dieta', icon: <FileText className="w-5 h-5" />, label: 'Minha Dieta' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}