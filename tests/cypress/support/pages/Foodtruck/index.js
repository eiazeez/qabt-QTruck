

class FoodTruckPage {

    addReview (review) {

        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`).click( { force: true } )
        cy.contains('button', 'Enviar avaliação').click()

    }

    reviewConfirm (user, review) {

    cy.contains('.profile .details strong', user.name)
        .should('be.visible')
        .should('have.text', user.name)

    cy.contains('.profile .details span', user.instagram)
        .should('be.visible')
        .should('have.text', user.instagram)

    cy.contains('.comment p', review.comment)
        .should('be.visible')
        .should('have.text', review.comment)

    cy.contains('.profile .details span', user.instagram)
        .parent()
        .parent()
        .siblings('.stars')
        .find('svg')
        .should('be.visible')    
        .should('have.length', review.stars)

    }
    
}

export default new FoodTruckPage ()

