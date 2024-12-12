import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';
import { ResultadoDieta } from '../components/ResultadoDieta';
import { DadosUsuario } from '../types';
import { generatePDF } from '../utils/pdfGenerator';
import { AlertTriangle } from 'lucide-react';

export function MinhaDieta() {
  const navigate = useNavigate();
  const dadosString = localStorage.getItem('dadosUsuario');
  const dados = dadosString ? (JSON.parse(dadosString) as DadosUsuario) : null;

  if (!dados) {
    return (
      <div className="text-center py-12 pt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nenhuma dieta encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Você ainda não criou sua dieta personalizada.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Criar Dieta
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <button
          onClick={() => generatePDF(dados)}
          className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-green-600 rounded-lg overflow-hidden shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-full group-hover:translate-x-0 ease bg-green-700"></span>
          <span className="relative flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Baixar Dieta em PDF
          </span>
        </button>
      </div>
      <ResultadoDieta dados={dados} />
    </div>
  );
}