import React, { useState } from 'react';
import { FormularioDieta } from '../components/FormularioDieta';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { DadosUsuario } from '../types';
import { useNavigate } from 'react-router-dom';
import { generateDietPlan } from '../services/api';

export function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (dados: DadosUsuario) => {
    setIsLoading(true);
    setError(null);

    try {
      const dietPlan = await generateDietPlan(dados);
      localStorage.setItem('dadosUsuario', JSON.stringify(dados));
      localStorage.setItem('dietPlan', JSON.stringify(dietPlan));
      navigate('/minha-dieta');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao gerar dieta. Tente novamente.');
    } finally {
      localStorage.setItem('dadosUsuario', JSON.stringify(dados));
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Crie sua dieta personalizada
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Responda algumas perguntas simples e receba um plano alimentar
          personalizado para alcançar seus objetivos.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <LoadingSpinner />
        </div>
      ) : (
        <FormularioDieta onSubmit={handleSubmit} />
      )}
    </div>
  );
}