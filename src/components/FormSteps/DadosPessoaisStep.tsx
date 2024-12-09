import React from 'react';
import { DadosUsuario } from '../../types';

interface DadosPessoaisStepProps {
  dados: DadosUsuario;
  onChange: (dados: Partial<DadosUsuario>) => void;
}

export function DadosPessoaisStep({ dados, onChange }: DadosPessoaisStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors"
          value={dados.nome}
          onChange={(e) => onChange({ nome: e.target.value })}
          placeholder="Digite seu nome completo"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors"
          value={dados.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="seu@email.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Sexo</label>
          <select
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors"
            value={dados.sexo}
            onChange={(e) => onChange({ sexo: e.target.value as 'masculino' | 'feminino' })}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Idade</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors"
            value={dados.idade || ''}
            onChange={(e) => onChange({ idade: Number(e.target.value) })}
            placeholder="Anos"
          />
        </div>
      </div>
    </div>
  );
}