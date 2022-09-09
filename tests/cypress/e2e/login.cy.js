import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'



describe('Página de Login', () => {

  context('Login válido', ()=> {
    
    beforeEach(()=> {
      cy.fixture('login-users').then(function(users){
        this.users = users
      })
    })

    it('Deve logar com sucesso', function() {
      
      const user = this.users.success

      cy.apiCreateUser(user)

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
  
      mapPage.greetingShouldBe (user)    
    })

  })

  context('Login inválido', function() {
   
    beforeEach( function() {
      cy.fixture('login-users').then(function(users){
        this.users = users
      })
    }) 

    it('Não deve logar com senha inválida', function () {

      const user = this.users.badPassword
      
      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()

      loginPage.modal.haveText ('Credenciais inválidas, tente novamente!')
      
    })
  
    it('Não deve logar com user inexistente', function() {

      const user = this.users.badUser
      
      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
  
      loginPage.modal.haveText ('Credenciais inválidas, tente novamente!')
  
    })
  
  })

  context('Campos obrigatórios', ()=> {

    beforeEach( function() {
      cy.fixture('login-users').then(function(users){
        this.users = users
      })
    }) 

    it('Todos os campos devem ser obrigatórios para logar', function () {
   
      loginPage.go ()
      loginPage.submit ()
  
      loginPage.modal.haveText ('Por favor, informe suas credenciais!')
  
    })

    it('Instagram deve ser obrigatório', function () {
      
      const user = this.users.required_insta

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
    
      loginPage.modal.haveText ('Por favor, informe o seu código do Instagram!')

    })

    it('Senha deve ser obrigatório', function () {
    
      const user = this.users.required_pass

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
    
      loginPage.modal.haveText ('Por favor, informe a sua senha secreta!')
      
    })
  })
})
