const calculadora = require("./calc");

describe("calculadora", () => {
  it("teste exemplo", () => {
    const numero1 = 23;
    const numero2 = 7;
    expect(23 + 7).toBe(30);
    expect(23 + 7).not.toBe(31);
  });

  describe("soma", () => {
    it("retorna 3 quando 2 somado com 1", () => {
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.soma(num1, num2)).toBe(3);
    });
  });

  describe("subtracao", () => {
    it("retorna 1 quando 1 subtrai de 2", () => {
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.substracao(num1, num2)).toBe(1);
    });
  });

  describe("multiplicacao", () => {
    it("retorna 6 quando 2 multplicado por 3", () => {
      const num1 = 2;
      const num2 = 3;
      expect(calculadora.multiplicacao(num1, num2)).toBe(6);
    });
  });

  describe("divisao", () => {
    // faca isso
    it("retorna 2 quando 6 divido por 3", () => {
      const num1 = 6;
      const num2 = 3;
      expect(calculadora.divisao(num1, num2)).toBe(2);
    });
    // faca isso
    it("retorna Erro se divisão por 0", () => {
      const num1 = 6;
      const num2 = 0;
      // espero esse resultado
      expect(calculadora.divisao(num1, num2)).toBe(
        "Erro, nao pode dividir por zero"
      );
    });
  });
});