import React from 'react';
import { DadosUsuario, NivelAtividade, Objetivo } from '../../types';
import { Activity, Target, Dumbbell } from 'lucide-react';

interface ObjetivosStepProps {
  dados: DadosUsuario;
  onChange: (dados: Partial<DadosUsuario>) => void;
}

export function ObjetivosStep({ dados, onChange }: ObjetivosStepProps) {
  const objetivos: { value: Objetivo; label: string; icon: JSX.Element }[] = [
    { value: 'perderPeso', label: 'Perder Peso', icon: <Activity className="w-6 h-6" /> },
    { value: 'manterPeso', label: 'Manter Peso', icon: <Target className="w-6 h-6" /> },
    { value: 'ganharMassa', label: 'Ganhar Massa', icon: <Dumbbell className="w-6 h-6" /> },
  ];

  const niveisAtividade: { value: NivelAtividade; label: string }[] = [
    { value: 'sedentario', label: 'Sedentário' },
    { value: 'leveAtivo', label: 'Levemente Ativo' },
    { value: 'moderadamenteAtivo', label: 'Moderadamente Ativo' },
    { value: 'muitoAtivo', label: 'Muito Ativo' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Qual é o seu objetivo?
        </label>
        <div className="grid grid-cols-3 gap-4">
          {objetivos.map(({ value, label, icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => onChange({ objetivo: value })}
              className={`p-4 rounded-lg border-2 flex flex-col items-center space-y-2 transition-all
                ${
                  dados.objetivo === value
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-green-200 hover:bg-green-50'
                }`}
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Qual é o seu nível de atividade física?
        </label>
        <div className="space-y-2">
          {niveisAtividade.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onChange({ nivelAtividade: value })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all
                ${
                  dados.nivelAtividade === value
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-green-200 hover:bg-green-50'
                }`}
            >
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}