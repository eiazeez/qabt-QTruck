import signupPage from '../support/pages/Signup'

describe ('Página de Cadastro', ()=> {

    context ('Em caso de cadastro bom:', ()=> {
        
        it ('deve cadastrar um novo user com sucesso!', ()=> {

            const user = {
                name: 'Douglas',
                instagram: 'doug',
                password: 'pwd123'
              }

            // cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
            //     cy.log(res);
            // });

            cy.apiResetUser (user.instagram)

            signupPage.go ()
            signupPage.form (user)
            signupPage.submit ()
            
            signupPage.modal.haveText ('Agora você pode recomendar e/ou avaliar Food trucks.')

        })

    })    

    context ('Em caso de cadastro ruim:', ()=> {
        
        it ('Não deve cadastrar em caso de instagram duplicado!', ()=> {

            const user = {
                name: 'Isac',
                instagram: 'Oliver',
                password: 'pwd123'
              }

            cy.apiCreateUser(user)

            signupPage.go ()
            signupPage.form (user)
            signupPage.submit ()
            
            signupPage.modal.haveText ('Instagram já cadastrado!')

        })

    })    

})

