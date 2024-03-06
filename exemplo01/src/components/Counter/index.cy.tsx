import Counter from ".";
import FontStyles from "../../assets/fonts/fonts";

describe('<Counter />', () => {
    it('should render counter with a correct value', () => {
        const value = 20
        cy.mount(
            <>
                <FontStyles />
                <Counter value={value}/>
        </>
        )
            const counterValue = cy.get ('[data-cy="counter-value"]');
            counterValue.should('have.text', value);
            counterValue.should('have.css', 'font-size', '32px');
        
    })
})