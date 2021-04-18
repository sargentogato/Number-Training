
describe('Numbers training', ()=>{
  it('Numbers', () => {
    cy.visit('index.html')
    cy.get('#btn').click()
    cy.wait(500)
    cy.get('.intro').type("hola{enter}")
    cy.wait(500)
    cy.get('#btn').click()
    cy.wait(500)
    cy.get('#btn').click()
    cy.wait(500)
    cy.get('#btn').click()
    cy.wait(500)
    cy.get('#btn').click()
  })
})
