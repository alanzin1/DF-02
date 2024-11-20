const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function determinarRank(saldoVitorias) {
  let rank = "";

  if (saldoVitorias < 10) {
    rank = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    rank = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    rank = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    rank = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    rank = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    rank = "Lendário";
  } else if (saldoVitorias >= 101) {
    rank = "Imortal";
  }

  return rank;
}

function calcularSaldo() {
  rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
      vitorias = parseInt(vitorias);
      derrotas = parseInt(derrotas);

      let saldoVitorias = vitorias - derrotas;

      let rank = determinarRank(saldoVitorias);

      console.log(
        `O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`
      );

      rl.close();
    });
  });
}

calcularSaldo();
