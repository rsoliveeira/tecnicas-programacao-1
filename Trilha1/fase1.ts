function contaEnergia(
  kwh: number,
  tarifa: number,
  imposto: number,
  bandeira: string
): number {
  let valorBase = kwh * tarifa;

  let acrescimoBandeira = 0;
  if (bandeira === "amarela") {
    acrescimoBandeira = kwh * 0.02;
  } else if (bandeira === "vermelha") {
    acrescimoBandeira = kwh * 0.05;
  }

  let totalSemImposto = valorBase + acrescimoBandeira;
  let totalComImposto = totalSemImposto + totalSemImposto * (imposto / 100);

  return totalComImposto;
}

const valorConta = contaEnergia(250, 0.8, 15, "vermelha");
console.log("Valor da conta de energia:", valorConta.toFixed(2));
