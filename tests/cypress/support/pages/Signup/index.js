import modal from '../../components/Modal'


class SignupPage {

    constructor () {
        this.modal = modal
    }

    go () {
        cy.visit('/signup')
    }

    form (user) {
        if (user.instagram) cy.get('input[name="name"]').type(user.name, {force: true} )
        if (user.instagram) cy.get('input[name="instagram"]').type(user.instagram, {force: true} )
        if (user.password)  cy.get('input[name="password"]').type(user.password, {force: true} )
    }

    submit () {
        cy.contains('button', 'Cadastrar').click( {force: true} )
    }

}

export default new SignupPage ()