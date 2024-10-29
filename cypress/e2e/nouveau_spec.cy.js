describe('test calc et counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  //Test Counter
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

  //Test Calculatrice
  it('Peut additionner 2 nombres positifs',() => {
    cy.get('#firstNumber').type('1')
    cy.get('#secondNumber').type('1')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('2')
  })
  it('Peut additionner 2 nombres négatifs',() =>{
    cy.get('#firstNumber').type('-1')
    cy.get('#secondNumber').type('-1')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('-2')
  })
  it('Peut additionner 1 nombre positif et un négatif',() => {
    cy.get('#firstNumber').type('1')
    cy.get('#secondNumber').type('-1')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('0')
  })
  it('Peut additionner 2 nombres à virgule',() => {
    cy.get('#firstNumber').type('1.5')
    cy.get('#secondNumber').type('1.5')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('3')
  })
  it('Peut additionner 2 nombres négatifs à virgule',() => {
    cy.get('#firstNumber').type('-1.5')
    cy.get('#secondNumber').type('-1.5')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('-3')
  })
  it('Peut additionner 2 grand nombres',() => {
    cy.get('#firstNumber').type('123456789')
    cy.get('#secondNumber').type('123456789')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('246913578')
  })
  it('Peut additionner 2 grand nombres negatifs',() => {
    cy.get('#firstNumber').type('-123456789')
    cy.get('#secondNumber').type('-123456789')
    cy.get('#calculBtn').click()
    cy.get('#result').contains('-246913578')
  })
  it('Gère les champs vides',() => { //erreur: Affiche NaN
    cy.get('#calculBtn').click()
    cy.get('#result').should('be.empty')
  })
})