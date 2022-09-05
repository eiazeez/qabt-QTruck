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
        FoodTruckPage.reviewConfirm(user, review)
        
    })

    it ('Deve validar todos os comentários caso haja mais de 1 comentário', ()=> {
        const user = {
            name: 'Steve Spilberg',
            instagram: 'stevinho',
            password: 'pwd123'
        }

        const user2 = {
            name: 'Tim Berling ',
            instagram: 'Avicii',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-3.7035751789173963',
            longitude: '-38.56732232300903',
            name: 'Tomorrowland',
            details: 'A terra do amanhã',
            opening_hours: 'Das 08h às 22h',
            open_on_weekends: false
        }

        const review = {
            comment: 'O taco estava divino, porém, caro.',
            stars: 3
        } 

        const review2 = {
            comment: 'Achei meio meme',
            stars: 1
        } 

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.apiCreateUser(user2)
        cy.apiLogin(user2)

        cy.uiLogin(user)

        MapPage.goToFoodtruck(foodtruck.name)

        FoodTruckPage.addReview(review)
        FoodTruckPage.reviewConfirm(user, review)

        cy.clearLocalStorage()
        cy.uiLogin(user2)

        MapPage.goToFoodtruck(foodtruck.name)

        FoodTruckPage.addReview(review2)
        FoodTruckPage.reviewConfirm(user2, review2)
        
    })

})