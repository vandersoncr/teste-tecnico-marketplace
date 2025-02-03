describe('adicionar produtos no carrinho', () => {
    it('Deve adicionar produtos saller no carrinho', () => {
        cy.login('testeqa@gmail.com', 'Qwerty123@');

        cy.get('.hot-departament-component .hot-link-name')
          .should('be.visible')
          .and('have.attr', 'href', '/produtos-select')
          .click();
  
        cy.novoProduto();

        cy.contains('h3.TitleCardComponent', 'Saco Lixo Banheiro Branco Select 50un.')
          .should('be.visible');

        cy.get('btn-action-decrement').click();
        
    });
   
});
  
  