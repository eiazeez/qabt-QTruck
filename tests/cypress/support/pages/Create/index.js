import modal from '../../components/Modal'

class CreatePage {

    constructor () {
        this.modal = modal
    }

    form (truck) {
        cy.setGeolocation(truck.latitude, truck.longitude)
        cy.get('#name').type(truck.name)
        cy.get('#details').type(truck.details)
        cy.get('#openingHours').type(truck.opening_hours)
        cy.contains('button', truck.open_on_weekends ? 'Sim' : 'Não' )
            .click()
    }

    submit () {
        cy.contains('button', 'Cadastrar').click()
    }

    

}

export default new CreatePage ()