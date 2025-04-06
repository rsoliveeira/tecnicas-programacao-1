export function validarCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  const cleaned = cpf.replace(/\D/g, "");

  // Verifica se tem 11 dígitos e se todos são iguais (ex: "11111111111" é inválido)
  if (!/^\d{11}$/.test(cleaned) || /^(\d)\1{10}$/.test(cleaned)) {
    return false;
  }

  const cpfArray = cleaned.split("").map(Number);

  // Função auxiliar para calcular um dígito verificador
  function calcularDigito(cpfParcial: number[], pesoInicial: number): number {
    const soma = cpfParcial.reduce(
      (acc, num, i) => acc + num * (pesoInicial - i),
      0
    );
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  }

  const primeiroDigito = calcularDigito(cpfArray.slice(0, 9), 10);
  const segundoDigito = calcularDigito(cpfArray.slice(0, 10), 11);

  return primeiroDigito === cpfArray[9] && segundoDigito === cpfArray[10];
}
