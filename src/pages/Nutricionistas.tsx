import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Nutricionistas() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const beneficios = [
    'Flexibilidade de horário',
    'Atendimento remoto',
    'Plataforma intuitiva',
    'Suporte técnico dedicado',
    'Pagamentos automáticos',
    'Gestão simplificada de pacientes'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Seja um Nutricionista Parceiro
          </h1>
          <p className="text-lg text-gray-600">
            Junte-se à nossa plataforma e expanda seu alcance profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Benefícios</h2>
            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">{beneficio}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Por que se juntar a nós?
              </h3>
              <p className="text-green-700">
                Nossa plataforma combina tecnologia avançada com expertise nutricional,
                permitindo que você foque no que mais importa: o cuidado com seus pacientes.
              </p>
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cadastro recebido com sucesso!
                </h3>
                <p className="text-gray-600">
                  Em breve nossa equipe entrará em contato com você.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail profissional
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CRN (Conselho Regional de Nutricionistas)
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Por que quer se juntar à plataforma?
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Enviar cadastro
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}