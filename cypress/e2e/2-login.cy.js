describe('Login com Credenciais Validas', () => {

    it('Logar com usuário valido', () => {
        cy.login('testeqa@gmail.com','Qwerty123@');        
    });

  });