import { jsPDF } from 'jspdf';
import { DadosUsuario } from '../types';

export function generatePDF(dados: DadosUsuario) {
  const doc = new jsPDF();
  const dietPlan = localStorage.getItem('dietPlan');
  const parsedDietPlan = dietPlan ? JSON.parse(dietPlan) : null;
  
  // Título
  doc.setFontSize(20);
  doc.text('Dieta Personalizada', 105, 20, { align: 'center' });
  
  // Informações do usuário
  doc.setFontSize(12);
  doc.text(`Nome: ${dados.nome}`, 20, 40);
  doc.text(`Idade: ${dados.idade} anos`, 20, 50);
  doc.text(`Altura: ${dados.altura} cm`, 20, 60);
  doc.text(`Peso: ${dados.peso} kg`, 20, 70);
  doc.text(`Objetivo: ${dados.objetivo}`, 20, 80);
  doc.text(`Nível de Atividade: ${dados.nivelAtividade}`, 20, 90);

  let yPos = 110;

  if (parsedDietPlan) {
    Object.entries(parsedDietPlan).forEach(([day, meals]: [string, any]) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(14);
      doc.text(day, 20, yPos);
      yPos += 10;

      doc.setFontSize(12);
      Object.entries(meals).forEach(([meal, details]: [string, any]) => {
        doc.text(`${meal}:`, 30, yPos);
        if (Array.isArray(details)) {
          details.forEach((item) => {
            yPos += 5;
            doc.text(`• ${item}`, 40, yPos);
          });
        } else {
          yPos += 5;
          doc.text(`• ${details}`, 40, yPos);
        }
        yPos += 10;
      });

      yPos += 10;
    });
  }

  // Download do PDF
  doc.save('dieta-personalizada.pdf');
}