describe("Teste Calculadora", function() {
    it("Somas Válidas", function() {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18); // Corrigido para 18, já que 9 + 9 é igual a 18
    });

    it("Subtrações Válidas", function() {
        expect(subtracao(5, 2)).toBe(3);
        expect(subtracao(14, 9)).toBe(5);
    });

    it("Multiplicações Válidas", function() {
        expect(multiplicar(3, 4)).toBe(12);
        expect(multiplicar(7, 2)).toBe(14);
    });

    it("Divisões Válidas", function() {
        expect(divisao(10, 2)).toBe(5);
        expect(divisao(15, 3)).toBe(5);
    });
});
