function calcularRank (vitorias, derrotas) {
let saldoVitorias = vitorias - derrotas;
let nivel;

if (vitorias >= 51 && derrotas > 0) {
saldoVitorias = 0;
nivel = "Ferro";
} else {
if (vitorias < 10) {
nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 100) {
nivel = "Diamante";
} else if (vitorias >= 101 && vitorias <= 199) {
nivel = "Lendário";
} else if (vitorias >= 200) {
nivel = "Imortal";
}
}

return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

