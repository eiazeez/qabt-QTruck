

class Modal {

    haveText (text) {
        cy.get('div[class=swal2-html-container]')
            .should('be.visible')
            .should('have.text', text)
    }

}

export default new Modal ()