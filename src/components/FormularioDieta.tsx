import React, { useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { DadosUsuario } from '../types';
import { StepIndicator } from './StepIndicator';
import { DadosPessoaisStep } from './FormSteps/DadosPessoaisStep';
import { MedidasStep } from './FormSteps/MedidasStep';
import { ObjetivosStep } from './FormSteps/ObjetivosStep';

interface FormularioDietaProps {
  onSubmit: (dados: DadosUsuario) => void;
}

const STEPS = ['Dados Pessoais', 'Medidas', 'Objetivos'];
const RECAPTCHA_SITE_KEY = '6LeJRpIqAAAAAPPaVGSBakbNdXEkVRB0-_69pb2A';

export function FormularioDieta({ onSubmit }: FormularioDietaProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [dados, setDados] = useState<DadosUsuario>({
    nome: '',
    email: '',
    sexo: 'masculino',
    idade: 0,
    altura: 0,
    peso: 0,
    objetivo: 'manterPeso',
    nivelAtividade: 'sedentario'
  });

  const updateDados = (newData: Partial<DadosUsuario>) => {
    setDados((prev) => ({ ...prev, ...newData }));
  };

  const handleCaptchaChange = useCallback((value: string | null) => {
    setCaptchaValue(value);
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (captchaValue) {
      onSubmit(dados);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return dados.nome.trim() !== '' && 
               dados.email.trim() !== '' && 
               dados.idade > 0;
      case 1:
        return dados.altura > 0 && dados.peso > 0;
      case 2:
        return true;
      default:
        return false;
    }
  };

  const isSubmitEnabled = isStepValid() && (currentStep < STEPS.length - 1 || captchaValue !== null);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <StepIndicator currentStep={currentStep} steps={STEPS} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        className="bg-white p-4 sm:p-8 rounded-xl shadow-lg"
      >
        {currentStep === 0 && (
          <DadosPessoaisStep dados={dados} onChange={updateDados} />
        )}
        {currentStep === 1 && <MedidasStep dados={dados} onChange={updateDados} />}
        {currentStep === 2 && <ObjetivosStep dados={dados} onChange={updateDados} />}

        {currentStep === STEPS.length - 1 && (
          <div className="mt-6 flex justify-center transform scale-90 sm:scale-100">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              className="transform scale-100 hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Voltar
            </button>
          )}
          <button
            type="submit"
            disabled={!isSubmitEnabled}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white transition-colors
              ${
                isSubmitEnabled
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }
              ${currentStep === 0 ? 'sm:ml-auto' : ''}`}
          >
            {currentStep === STEPS.length - 1 ? 'Gerar Dieta' : 'Próximo'}
          </button>
        </div>
      </form>
    </div>
  );
}