

class FoodTruckPage {

    addReview (review) {

        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click( { force: true } )
            .should('be.checked')
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
    
    formShouldBeEmpty() {

        // A validação é feita de 2 formas:

        // A 1º verifica se o campo de inserir a review está vazio
        cy.get('textarea[name=comment]').should('be.empty')
     
        // A 2º verifica se todas as estrelas estão desmarcadas
        const stars = [
            '1',
            '2',
            '3',
            '4',
            '5'
          ]
    
          stars.forEach(function (star) {
            cy.get(`input[name=stars][value="${star}"]`)
                .should('not.be.checked')
          })

    }
}


export default new FoodTruckPage ()

