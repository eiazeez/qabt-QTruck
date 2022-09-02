import LoginPage from '../support/pages/Login'
import MapPage from '../support/pages/Map'
import FoodTruckPage from '../support/pages/Foodtruck'


describe('Avaliações', ()=> {

    it ('Deve enviar uma nova avaliação', ()=> {

        const user = {

            name: 'Madru Gada',
            instagram: 'madruguinha',
            password: 'pwd123'

        }

        const foodtruck = {
            latitude: '-3.7035751789173963',
            longitude: '-38.56732232300903',
            name: 'Tienda del Piero',
            details: 'Teste',
            opening_hours: 'Das 08h às 22h',
            open_on_weekends: false
        }

        const review = {
            comment: 'O suco tava top',
            stars: 4
        } 

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        MapPage.goToFoodtruck(foodtruck.name)
        FoodTruckPage.addReview(review)

    })

})