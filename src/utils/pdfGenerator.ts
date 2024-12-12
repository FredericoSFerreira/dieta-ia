import { jsPDF } from 'jspdf';
import { DadosUsuario } from '../types';

export function generatePDF(dados: DadosUsuario) {
  const doc = new jsPDF();
  const dietPlan = localStorage.getItem('dietPlan');
  const parsedDietPlan = dietPlan ? JSON.parse(dietPlan) : null;
  
  // Título
  doc.setFontSize(20);
  doc.text('Dieta Personalizada', 105, 20, { align: 'center' });

  // doc.setFontSize(8);
  // doc.text(`Observações: ${parsedDietPlan.observacao}`, 20, 30)

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
    parsedDietPlan.refeicoes.forEach((item) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(14);
      doc.text(item.dia.toUpperCase(), 20, yPos);
      yPos += 10;

      doc.setFontSize(12);
      item.refeicoes.forEach((refeicoes) => {
        doc.text(`${refeicoes.nome}:`, 30, yPos);
        if (Array.isArray(refeicoes.alimentos)) {
          refeicoes.alimentos.forEach((item) => {
            yPos += 5;
            doc.text(`• ${item}`, 40, yPos);
          });
        }
        yPos += 10;
      });

      yPos += 10;
    });
  }

  // Download do PDF
  doc.save('dieta-personalizada.pdf');
}