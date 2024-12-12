import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { MinhaDieta } from './pages/MinhaDieta';
import { FAQ } from './pages/FAQ';
import { Nutricionistas } from './pages/Nutricionistas';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-grow bg-gradient-to-br from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/minha-dieta" element={<MinhaDieta />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/nutricionistas" element={<Nutricionistas />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Gerador de Dieta Personalizada usando IA. Criado por Frederico Ferreira.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;