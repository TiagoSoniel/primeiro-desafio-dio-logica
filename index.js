// Fontes de auxílio: https://github.com/rodrigoterradigital/desafio_LP_Dio_Nivel_de_Heroi/blob/main/heroi.js
// Fontes de auxílio: ChatGPT

// Variáveis para armazenar os nomes, as quantidades de experiência (XP) e os níveis dos heróis

let nomesDoHeroi = ["Sparrow", "Kyara", "Andrew", "Zelgadis", "Sitka", "Alana", "Samara", "Altilus"];
let xps = [855, 1633, 4032, 6444, 7922, 8300, 9175, 12000];
let niveisDoHeroi = [];

// Estrutura de repetição para determinar o nível de cada herói com base na XP

for (let i = 0; i < nomesDoHeroi.length; i++) {
  let xp = xps[i];
  let nivel;

// Estrutura de decisão

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  niveisDoHeroi.push(nivel);
}

// Exibe a mensagem com o nível de cada herói

for (let i = 0; i < nomesDoHeroi.length; i++) {
  console.log("O herói " + nomesDoHeroi[i] + " está no nível " + niveisDoHeroi[i]);
}
