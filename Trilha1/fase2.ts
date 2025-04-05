interface ConsumoEnergia {
  kwh: number;
  tarifa: number;
  imposto: number;
  bandeira: "verde" | "amarela" | "vermelha";
}

function calcularValorBase(consumo: number, tarifa: number): number {
  return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
  if (bandeira === "amarela") {
    return consumo * 0.02;
  } else if (bandeira === "vermelha") {
    return consumo * 0.05;
  }
  return 0;
}

function calcularImposto(valor: number, percentualImposto: number): number {
  return valor * (percentualImposto / 100);
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
  const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
  const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
  const subtotal = valorBase + ajusteBandeira;
  const valorImposto = calcularImposto(subtotal, consumo.imposto);
  const total = subtotal + valorImposto;

  return total;
}

const exemploConsumo: ConsumoEnergia = {
  kwh: 200,
  tarifa: 0.85,
  imposto: 12,
  bandeira: "amarela",
};

const valorFinal = calcularContaEnergia(exemploConsumo);
console.log("Valor final da conta de energia:", valorFinal.toFixed(2));
