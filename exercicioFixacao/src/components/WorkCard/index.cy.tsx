import WorkCard from ".";

 describe("<WorkCard />", () => {
  it("should render title correctly", () => {
    const title = "Meu texto";
    const authors = ['aaa'];

    cy.mount(<WorkCard title={title} authors={authors}/>);
    cy.get('[cy-data = "workCard-title"]').should("have.text", title);
  });
});