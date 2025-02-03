
describe('Pagamento via Boleto', () => {
    it('finalizar compra com boleto bancario', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
      });

      cy.login('testeqa@gmail.com', 'Qwerty123@');

      cy.get('.hot-departament-component .hot-link-name')
        .should('be.visible')
        .and('have.attr', 'href', '/produtos-select')
        .click();

      cy.adicionarProdutoAoCarrinho();

      cy.escolherFormaDeEntrega();
        
      cy.contains('span.tab-header', 'Boleto bancário').click({ force: true });
      cy.get('button.btn-buy').contains('Pagar com boleto').click()
      cy.get('p.txtBlue.thanks').should('contain', 'Obrigado!');
      cy.get('p.txtBlue.msgFinal').should('contain', 'Seu pedido foi realizado com sucesso :)'); 

    });
  });