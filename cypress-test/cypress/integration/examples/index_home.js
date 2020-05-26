describe('Test Suite', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('User insert 10 baht and 5 baht coins and select Pepsi Max',()=>{
        cy.get('#10baht').click()
        cy.get('#5baht').click()
        cy.get('#1').click()
    })

    it('User insert 10 baht, 5 baht, 2 baht and 1 baht coins and select Pepsi Max',()=>{
        cy.get('#10baht').click()
        cy.get('#5baht').click()
        cy.get('#2baht').click()
        cy.get('#1baht').click()
        cy.get('#1').click()
        cy.get('#refund').click()
    })

    it("User insert 10 baht and 2 baht coins and select Pepsi Max but can't select it because user don't have enough money",()=>{
        cy.get('#10baht').click()
        cy.get('#2baht').click()
        cy.get('#1').click()
    })

    it("User insert 10 baht and 2 baht coins and select Coke Vanilla (S) but can't select it because this product isn't available",()=>{
        cy.get('#10baht').click()
        cy.get('#2baht').click()
        cy.get('#4').should('be.disabled')
    })

    it('User insert 10 baht (2 coins) and 2 baht (1 coin) but user would like to refund',()=>{
        cy.get('#10baht').click()
        cy.get('#10baht').click()
        cy.get('#2baht').click()
        cy.get('#refund').click()
    })
})