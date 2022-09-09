

class FoodTruckPage {

    addReview (review) {

        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`).click( { force: true } )
        cy.contains('button', 'Enviar avaliação').click()

    }

    reviewConfirm (user, review) {

    cy.contains('.review-box', user.instagram).as('reviewBox')
        .find('.comment p')
        .should('have.text', review.comment)

    cy.get('@reviewBox')
        .find('svg')
        .should('be.visible')    
        .should('have.length', review.stars)

    }
    
}

export default new FoodTruckPage ()

