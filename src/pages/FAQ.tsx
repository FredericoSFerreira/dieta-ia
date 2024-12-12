import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: 'Como funciona a geração de dieta personalizada?',
      answer: 'Nossa plataforma utiliza inteligência artificial avançada para criar um plano alimentar personalizado com base nas suas informações pessoais, objetivos e preferências alimentares.'
    },
    // {
    //   question: 'As dietas são seguras e confiáveis?',
    //   answer: 'Sim! Nossas dietas são geradas seguindo diretrizes nutricionais estabelecidas e são revisadas por profissionais qualificados.'
    // },
    {
      question: 'Posso modificar minha dieta depois de gerada?',
      answer: 'Sim, você pode gerar uma nova dieta a qualquer momento com diferentes objetivos ou preferências.'
    },
    {
      question: 'Como sei se a dieta está adequada para mim?',
      answer: 'Nossa IA considera diversos fatores como idade, peso, altura e nível de atividade física para criar um plano personalizado. No entanto, recomendamos consultar um nutricionista para ajustes específicos.'
    },
    {
      question: 'Quanto tempo devo seguir a dieta?',
      answer: 'Recomendamos seguir o plano por pelo menos 4 semanas para ver resultados. Após esse período, você pode gerar um novo plano ou ajustar seus objetivos.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-lg text-gray-600">
          Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}