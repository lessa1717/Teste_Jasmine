describe("Teste de Classificacao de  Idade", function () {
    it("Classificacao Maior idade", function () {
        expect(maioridade(20)).toBe("Maior idade")

    })
})
describe("Teste de Classificacao de  Idade", function () {
    it("Classificacao Menor idade", function () {
        expect(maioridade(10)).toBe("Menor idade")
    })

})
describe("Teste de Classificacao de  Idade", function () {
    it("Entrada inválida", function () {
        expect(maioridade(0)).toBe("Idade inválida")
    })

})

