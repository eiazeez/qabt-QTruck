import mapPage from '../support/pages/Map'
import CreatePage from '../support/pages/Create'

describe ('Recomendação', ()=> {

    context ('Após criar um Food Truck', ()=> {
        
        it ('deve realizar recomendação', ()=> {

            const user = {
                name: 'Frusciante',
                instagram: 'John',
                password: 'california'
            }
            
            const foodtruck = {
                latitude: '-23.583654062428796',
                longitude: '-46.67752861976624',
                name: 'Churros da Dona Florinda',
                details: 'O melhor churros mexicado da região.',
                opening_hours: 'das 15h às 19h',
                open_on_weekends: false
            }

            cy.apiCreateUser(user)
            cy.uiLogin(user)

            mapPage.goToCreate()

            CreatePage.form(foodtruck)
            CreatePage.submit()
            CreatePage.modal.haveText ('Food truck cadastrado com sucesso!')

        })

        it ('Não deve cadastrar foodtruck com nome Duplicado', ()=> {

            const user = {
                name: 'Anthony',
                instagram: 'Kiedis',
                password: 'danicalifornia'
            }
            
            const foodtruck = {
                latitude: '-3.7254281594455803',
                longitude: '-38.494924306869514',
                name: 'El taco',
                details: 'De pedenjo, los mejores tacos',
                opening_hours: 'Das 08h às 22h',
                open_on_weekends: false
            }

            cy.apiCreateUser(user)
            cy.apiLogin(user)
            cy.apiCreateFoodTruck(foodtruck)

            cy.uiLogin(user)
            
            mapPage.goToCreate()

            CreatePage.form(foodtruck)
            CreatePage.submit()
            CreatePage.modal.haveText ('Esse food truck já foi cadastrado!')

        })

        it ('Todos os campos são obrigatórios', ()=> {

            const user = {
                name: 'Flea',
                instagram: 'Bag',
                password: 'bass'
            }
            
            const foodtruck = {
                latitude: '-3.7051718630264654',
                longitude: '-38.56324776469788',
            }

            cy.apiCreateUser(user)
            cy.uiLogin(user)

            mapPage.goToCreate()

            cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
            CreatePage.submit()

            const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'

            CreatePage.modal.haveText (message)  

        })

    })    

})
