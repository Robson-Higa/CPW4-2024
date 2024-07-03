import CounterPanel from ".";

describe("<CounterPanel />", () => {
    it("should correctly count charcters", () => {
        const sentence = "Fala, galera!";
        cy.mount(<CounterPanel sentence={sentence} />)
        const result = `A frase contém ${sentence.length} caracteres.`
        cy.get('p').should("have.text",result)
    })
})