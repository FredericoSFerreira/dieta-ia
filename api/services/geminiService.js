import {GoogleGenerativeAI} from '@google/generative-ai';
import {logger} from '../utils/logger.js';
import dotenv from 'dotenv';

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateDietPlan(userData) {
    try {
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

        const prompt = createDietPrompt(userData);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log(JSON.stringify(response, null, 2));

        return parseDietResponse(text);
    } catch (error) {
        logger.error('Gemini API error', {error: error.message});
        throw new Error('Failed to generate diet plan');
    }
}

function createDietPrompt(userData) {
    const enableAllWeeks = true
    const allWeeks = enableAllWeeks ? "contendo um objeto com todos os dias da semana" : "";
    return `Crie uma dieta completa para uma pessoa com nome: ${userData.nome} do sexo ${userData.sexo}
            com peso atual: ${userData.peso}kg, altura: ${userData.altura}cm, idade: ${userData.idade} anos
            e com foco e objetivo em ${userData.objetivo}, atualmente nível de atividade: ${userData.nivelAtividade}
            e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades,
            propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura,
            propriedade peso, propriedade objetivo com o objetivo atual, propriedade refeições com uma array
            ${allWeeks} e dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário
            com horário da refeição, propriedade nome com nome a proprieadde calorias com as colorias dos alimentos e a 
            propriedade alimentos com array contendo os alimentos dessa refeição concatenados com suas respectivas
             calorias e pode incluir uma propriedade como suplementos contendo array com sugestão de suplementos que
            é indicado para o sexo dessa pessoa e o objetivo dela retorne uma propriedade observação contendo uma string de aviso e não retornar nada alem das informações passadas no
            prompt, retorne em json e nenhuma propriedade pode ter acento.`
}

function parseDietResponse(text) {
    try {
        let jsonString = text.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
        const note = "As calorias são aproximadas e podem variar dependendo da marca e preparo dos alimentos.  Esta dieta é um exemplo e deve ser adaptada às necessidades individuais.  É fundamental consultar um nutricionista ou profissional de saúde antes de iniciar qualquer programa de perda de peso.  A inclusão de exercícios físicos é crucial para uma perda de peso saudável e sustentável."
        const jsonParsed = JSON.parse(jsonString);
        return {...jsonParsed, nota: note}

    } catch (error) {
        logger.error('Error parsing Gemini response', {error: error.message});
        throw new Error('Invalid diet plan format received');
    }
}