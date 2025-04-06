import { validarCPF } from "./validarCPF";

describe("validação de CPF", () => {
  it("deve retornar true para um CPF válido", () => {
    expect(validarCPF("52998224725")).toBe(true);
  });

  it("deve retornar false para um CPF com dígitos verificadores inválidos", () => {
    expect(validarCPF("52998224700")).toBe(false);
  });

  it("deve retornar false para um CPF com menos de 11 dígitos", () => {
    expect(validarCPF("123456789")).toBe(false);
  });

  it("deve retornar false para um CPF com letras ou símbolos", () => {
    expect(validarCPF("abc12345678")).toBe(false);
  });

  it("deve retornar false para um CPF com todos os dígitos iguais", () => {
    expect(validarCPF("11111111111")).toBe(false);
  });
});
