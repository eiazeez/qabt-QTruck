

class MapPage {

    greetingShouldBe (user) {
        cy.get('.logged-user')
            .should('have.text', `Olá, ${user.name}`)
            .should('be.visible')
    }

}

export default new MapPage ()