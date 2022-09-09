import LoginPage from '../support/pages/Login'
import MapPage from '../support/pages/Map'
import FoodTruckPage from '../support/pages/Foodtruck'


describe('Avaliações', ()=> {

    
    beforeEach(()=> {
        cy.fixture('review').then(function(users){
          this.users = users
        })
      })

    it ('Deve enviar uma nova avaliação', function () {

        const user = this.users.simple_validate.user
        const foodtruck = this.users.simple_validate.foodtruck
        const review = this.users.simple_validate.review


        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        MapPage.goToFoodtruck(foodtruck.name)

        FoodTruckPage.addReview(review)
        FoodTruckPage.reviewConfirm(user, review)
        
    })

    it ('Deve validar todos os comentários caso haja mais de 1 comentário', function () {
        
        const user = this.users.dual_validate.user
        const user2 = this.users.dual_validate.user2
        const foodtruck = this.users.dual_validate.foodtruck
        const review = this.users.dual_validate.review
        const review2 = this.users.dual_validate.review2

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateUser(user2)
        cy.apiLogin(user2)
        cy.apiCreateFoodTruck(foodtruck)

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