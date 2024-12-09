import React from 'react';
import { DadosUsuario } from '../../types';

interface MedidasStepProps {
  dados: DadosUsuario;
  onChange: (dados: Partial<DadosUsuario>) => void;
}

export function MedidasStep({ dados, onChange }: MedidasStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Altura</label>
          <div className="mt-1 relative rounded-lg shadow-sm">
            <input
              type="number"
              required
              min="0"
              className="block w-full rounded-lg border-gray-300 pl-3 pr-12 focus:border-green-500 focus:ring-green-500 transition-colors"
              value={dados.altura || ''}
              onChange={(e) => onChange({ altura: Number(e.target.value) })}
              placeholder="170"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">cm</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Peso</label>
          <div className="mt-1 relative rounded-lg shadow-sm">
            <input
              type="number"
              required
              min="0"
              step="0.1"
              className="block w-full rounded-lg border-gray-300 pl-3 pr-12 focus:border-green-500 focus:ring-green-500 transition-colors"
              value={dados.peso || ''}
              onChange={(e) => onChange({ peso: Number(e.target.value) })}
              placeholder="70.5"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm">kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}