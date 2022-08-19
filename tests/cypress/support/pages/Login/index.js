import modal from '../../components/Modal'


class LoginPage {

    constructor () {
        this.modal = modal
    }

    go () {
        cy.visit('/')
    }

    form (user) {
        if (user.instagram) cy.get('input[name="instagram"]').type(user.instagram, {force: true} )
        if (user.password)  cy.get('input[name="password"]').type(user.password, {force: true} )
    }

    submit () {
        cy.contains('button', 'Entrar').click( {force: true} )
    }

}

export default new LoginPage ()