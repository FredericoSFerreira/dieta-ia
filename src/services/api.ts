import { DadosUsuario } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function generateDietPlan(userData: DadosUsuario) {
  try {
    const response = await fetch(`${API_BASE_URL}/diet/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate diet plan');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error generating diet plan:', error);
    throw error;
  }
}