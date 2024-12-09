import React from 'react';
import { Check } from 'lucide-react';

export function Planos() {
  const planos = [
    {
      nome: 'Básico',
      preco: 'Grátis',
      recursos: [
        'Dieta personalizada básica',
        'Recomendações gerais',
        'Plano semanal',
      ],
    },
    {
      nome: 'Premium',
      preco: 'R$ 29,90/mês',
      recursos: [
        'Dieta personalizada avançada',
        'Acompanhamento nutricional',
        'Plano detalhado',
        'Receitas exclusivas',
        'Suporte via chat',
      ],
      destaque: true,
    },
    {
      nome: 'Pro',
      preco: 'R$ 49,90/mês',
      recursos: [
        'Tudo do Premium',
        'Consultas online',
        'App exclusivo',
        'Comunidade VIP',
        'Suporte 24/7',
      ],
    },
  ];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Nossos Planos</h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">
            Escolha o plano ideal para seus objetivos
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plano.destaque ? 'ring-2 ring-green-500' : ''
              }`}
            >
              <div className="px-4 sm:px-6 py-6 sm:py-8 bg-white">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {plano.nome}
                </h3>
                <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                  {plano.preco}
                </p>
                <ul className="mt-6 space-y-3 sm:space-y-4">
                  {plano.recursos.map((recurso) => (
                    <li key={recurso} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-gray-600">{recurso}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 sm:mt-8 w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${
                    plano.destaque
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  Começar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}