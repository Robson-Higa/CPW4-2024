import SearchInput from ".";

describe("<SearchInput />", () => {
  it("should render width and heigth correctly", () => {
    const query = "Meu texto";

    cy.mount(<SearchInput query={query} setQuery={() => {}} />);
     const width = "400";

    cy.get('[data-cy="search-input"]')
      .invoke("css", "width")
      .then((value) => parseFloat(`${value}`).toFixed(0))
      .should("eq", width);

    cy.get('[data-cy="search-input"]')
      .invoke("css", "height").should("eq", '35px');


  });

   it("should render placeholder correctly", () => {
   
    
    const placeholder = 'Digite a pesquisa';

    cy.mount(<SearchInput query={query} setQuery={() => {}} />);

    cy.get('[data-cy="search-input"]').should("have.text", placeholder);


  });
  
  });
