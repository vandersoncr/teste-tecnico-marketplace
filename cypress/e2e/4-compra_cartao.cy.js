describe('Pagamento via crédito ', () => {
    it('finalizar compra com cartão de crédito', () => {
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
        
      cy.contains('.tab-header', 'Cartão de crédito') 
        .should('be.visible')  
        .click(); 
      cy.get('input[name="cardNumber"]').type('4000000000000010'); 

      cy.get('.react-select__value-container') // Seleciona o campo de seleção
        .click(); // Clica para abrir o dropdown
      cy.get('#react-select-2-input') // Seleciona o campo de entrada pelo ID
        .type('08{enter}'); // Digita "08" e pressiona Enter para selecionar
  
      cy.get('.react-select__dropdown-indicator') // Seleciona o ícone de dropdown
        .click(); // Clica para abrir o dropdown
      cy.get('.react-select__single-value') // Seleciona o campo que exibe o valor selecionado
        .should('contain', '2025'); // Verifica se o valor "2025" está visível

      cy.get('#cvv').type('123');
      cy.get('#name').type('Cardo Silva');
      cy.get('cpf').type('216.260.580-59');
      cy.contains('button', 'Pagar com cartão de crédito')  
        .should('be.visible').click();  


    });
  });