describe('test counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('le compteur est a 0',() => {
    cy.get('#counter').contains('count is 0')
  })
  it('le compteur augmente lors du clic sur le bouton',() =>{
    cy.get('#counter').click()
    cy.get('#counter').contains('count is 1')
  })
  it('le compteur augmente de 2 lors de deux clic sur le bouton',() =>{
    cy.get('#counter').dblclick()
    cy.get('#counter').contains('count is 2')
  })
  it('le compteur augmente de 6 lors de 6 clic sur le bouton',() =>{
    cy.get('#counter').dblclick()
    cy.get('#counter').dblclick()
    cy.get('#counter').dblclick()
    cy.get('#counter').contains('count is 6')
  })
  it('les logos et les liens sont corrects',() =>{
    cy.get('a')
      .should('have.attr', 'href')
    cy.get('img')
      .should('have.attr', 'src')
  })
})