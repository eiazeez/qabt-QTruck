import loginPage from './pages/Login'
import mapPage from './pages/Map'

Cypress.Commands.add('apiLogin', (user) => {

    const payload = {
        instagram: user.instagram,
        password: user.password
    }

    cy.request({
        url: 'http://localhost:3333/sessions',
        method: 'POST',
        body: payload
    }).then(response=> {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('apiCreateFoodTruck', (payload)=> {
    cy.request({
        url: 'http://localhost:3333/foodtrucks',
        method: 'POST',
        headers: {
            'Authorization': Cypress.env('token')
        },
        body: payload
    }).then(response => {
        expect(response.status).to.eql(201)
    })
})

Cypress.Commands.add('apiResetUser', (instagram) => {

    cy.request ({

        url: 'http://localhost:3333/helpers-reset',
        method: 'DELETE',
        qs: { instagram: instagram }

    }).then(response => {

        expect(response.status).to.eql(204)

    })

})

Cypress.Commands.add('apiCreateUser', (payload) => {

    cy.apiResetUser(payload.instagram)
    cy.request ({

        url: 'http://localhost:3333/signup',
        method: 'POST',
        body: payload

    }).then(response => {

        expect(response.status).to.eql(201)

    })

})

Cypress.Commands.add('uiLogin', (user) => {
            
    loginPage.go ('-3.703575178917396', '-38.56732232300903')
    loginPage.form (user)
    loginPage.submit ()

    mapPage.greetingShouldBe (user) 

})

Cypress.Commands.add('setGeolocation', (lat, lng) => {

    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', lng)

})




