import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { MinhaDieta } from './pages/MinhaDieta';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Gerador de Dieta Personalizada
              </h1>
            </div>
          </div>
        </header>

        <Navigation />

        <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/minha-dieta" element={<MinhaDieta />} />
          </Routes>
        </main>

        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Gerador de Dieta Personalizada. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;