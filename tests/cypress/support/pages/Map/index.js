

class MapPage {

    greetingShouldBe (user) {
        const firstName = user.name.split(' ')[0]

        cy.get('.logged-user')
            .should('have.text', `Olá, ${firstName}`)
            .should('be.visible')
    }

    goToCreate () {
        cy.get('a.create-foodtruck')
            .should('be.visible')
            .click()
    }

    goToFoodtruck (foodtruckName) {
        cy.get(`img[alt="${foodtruckName}"]`)
            .should('be.visible')
            .click()
        
        cy.get('.leaflet-popup-content')
            .find('a')
            .click()
    }

}

export default new MapPage ()