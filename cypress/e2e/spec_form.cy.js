const currentDate = new Date();
const datejour = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

describe('test formuaire', () => {
  beforeEach(() => {
    cy.visit('https://testing.adrardev.fr/addUser')
  })

  it('Remplissage du formulaire et envoi', () => {
    cy.get('input[name="nom"]').type('Neko')
    cy.get('input[name="prenom"]').type('Garf')
    cy.get('input[name="mail"]').type('Garf@neko.fr')
    cy.get('input[name="mdp"]').type('123456789')
    cy.get('input[name="submit"]').click()

    cy.get('#msgzone').then(($msgzone) => {
      if ($msgzone.text().includes("Le compte a été ajouté en BDD")) {
        cy.request('POST', 'https://testing.adrardev.fr/api/addTest', {
          date: datejour,
          name: 'Test de validation',
          valid: true,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Valid).includes("Le compte a ete ajouté")
          console.log('Compte Correctement crée')
        })
      } else if ($msgzone.text().includes("Les informations sont incorrectes")) {
        cy.request('POST', 'https://testing.adrardev.fr/api/addTest', {
          date: datejour,
          name: 'Test de validation',
          valid: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Valid).includes("Le compte a ete ajouté")
          console.log('Compte Existant')
        })
      }
    })
  })
})
