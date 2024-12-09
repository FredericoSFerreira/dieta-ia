export type NivelAtividade = 'sedentario' | 'leveAtivo' | 'moderadamenteAtivo' | 'muitoAtivo';

export type Objetivo = 'perderPeso' | 'manterPeso' | 'ganharMassa';

export interface DadosUsuario {
  nome: string;
  email: string;
  sexo: 'masculino' | 'feminino';
  idade: number;
  altura: number;
  peso: number;
  objetivo: Objetivo;
  nivelAtividade: NivelAtividade;
}