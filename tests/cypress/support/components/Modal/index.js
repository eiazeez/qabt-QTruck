

class Modal {

    haveText (text) {
        cy.get('div[class=swal2-html-container]')
            .should('be.visible')
            .should('have.text', text)
    }

    confirm () {
        cy.get('button[class*="confirm"]').click()
    }

}

export default new Modal ()