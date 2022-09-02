import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Página de Login', () => {

  context('Login válido', ()=> {
    
    it('Deve logar com sucesso', () => {
      const user = {
        name: 'Az',
        instagram: 'azeez',
        password: 'pwd123'
      }
      
      cy.apiCreateUser(user)

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
  
      mapPage.greetingShouldBe (user)    
    })

  })

  context('Login inválido', ()=> {
    
    it('Não deve logar com senha inválida', () => {
      const user = {
        instagram: 'azeez',
        password: 'SenhaRuim'
      }
      
      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()

      loginPage.modal.haveText ('Credenciais inválidas, tente novamente!')
      
    })
  
    it('Não deve logar com user inexistente', () => {
      const user = {
        instagram: 'UserRuim',
        password: 'pwd123'
      }
      
      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
  
      loginPage.modal.haveText ('Credenciais inválidas, tente novamente!')
  
    })
  
  })

  context('Campos obrigatórios', ()=> {

    it('Todos os campos devem ser obrigatórios para logar', () => {
   
      loginPage.go ()
      loginPage.submit ()
  
      loginPage.modal.haveText ('Por favor, informe suas credenciais!')
  
    })

    it('Instagram deve ser obrigatório', ()=> {
      
      const user = {
        password: 'pwd123'
      }

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
    
      loginPage.modal.haveText ('Por favor, informe o seu código do Instagram!')

    })

    it('Senha deve ser obrigatório', ()=> {
     
      const user = {
        instagram: 'azeez',
      }

      loginPage.go ()
      loginPage.form (user)
      loginPage.submit ()
    
      loginPage.modal.haveText ('Por favor, informe a sua senha secreta!')
      
    })
  })
})
