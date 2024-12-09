import React from 'react';
import { DadosUsuario } from '../types';

interface ResultadoDietaProps {
  dados: DadosUsuario;
}

export function ResultadoDieta({ dados }: ResultadoDietaProps) {
  const dietPlan = localStorage.getItem('dietPlan');
  const parsedDietPlan = dietPlan ? JSON.parse(dietPlan) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 bg-green-600 text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Dieta Personalizada para {dados.nome}</h2>
          <p className="text-sm text-green-100 mt-1">{dados.email}</p>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Informações Pessoais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p><span className="font-medium">Idade:</span> {dados.idade} anos</p>
                <p><span className="font-medium">Altura:</span> {dados.altura} cm</p>
                <p><span className="font-medium">Peso:</span> {dados.peso} kg</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-medium">Sexo:</span> {dados.sexo === 'masculino' ? 'Masculino' : 'Feminino'}</p>
                <p><span className="font-medium">Objetivo:</span> {
                  dados.objetivo === 'perderPeso' ? 'Perder Peso' :
                  dados.objetivo === 'manterPeso' ? 'Manter Peso' : 'Ganhar Massa'
                }</p>
                <p><span className="font-medium">Nível de Atividade:</span> {
                  dados.nivelAtividade === 'sedentario' ? 'Sedentário' :
                  dados.nivelAtividade === 'leveAtivo' ? 'Levemente Ativo' :
                  dados.nivelAtividade === 'moderadamenteAtivo' ? 'Moderadamente Ativo' : 'Muito Ativo'
                }</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {parsedDietPlan ? (
              Object.entries(parsedDietPlan).map(([day, meals]: [string, any]) => (
                <div key={day} className="border rounded-lg p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{day}</h3>
                  <div className="grid gap-3 sm:gap-4">
                    {Object.entries(meals).map(([meal, details]: [string, any]) => (
                      <div key={meal} className="space-y-1">
                        <h4 className="font-medium text-green-600">{meal}</h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          {Array.isArray(details) ? (
                            details.map((item, index) => (
                              <span key={index} className="block">• {item}</span>
                            ))
                          ) : (
                            <span>• {details}</span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhum plano de dieta disponível.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}