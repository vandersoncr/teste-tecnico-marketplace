// ***********************************************
//              Vanderson QA - 2025
// ***********************************************



//criar cadastro de usuário
Cypress.Commands.add('cadastroUsuario', (userData) => {
    cy.get('#nome',{ timeout: 10000 }).type(userData.nome);
    cy.get('#cpf').type(userData.cpf);
    cy.get('#email').type(userData.email);
    cy.get('#cellphone').type(userData.cellphone);
    cy.get('#password').type(userData.password);
    cy.get('#password2').type(userData.password2);
    cy.get('.btn-create-account > [data-cy="btn-"]').click();
    cy.get('div[role="alert"]', { timeout: 20000 })
      .should('be.visible').and('contain.text', 'Usuário cadastrado.');
});

//login com credenciais válidas
Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/login');
    cy.get('#login').type(email);
    cy.get('#password').type(senha);
    cy.get('button[type="submit"]', {timeout: 1000}).click();
    // cy.contains('button', 'CONCORDO E FECHAR').should('be.visible') // botão termo está visível
    // .and('not.be.disabled').click();  
  });

//Dados de enterega 
  Cypress.Commands.add('escolherFormaDeEntrega', () => {
    cy.get('button.btn-delivery').contains('Escolher forma de entrega').click({ force: true });
    cy.get('div.with-tag')
      .find('span.tag')
      .should('contain', 'Grátis');
    cy.get('span.title-shipping-option', { timeout: 10000 }) 
      .contains('Clique & Retire')
      .should('be.visible')
      .click();
    cy.contains('span.title-address-option', 'Taubaté', { timeout: 10000 }).click({ force: true });
    cy.get('#2025-02-06').click(); 
    cy.contains('.title-address-option', '12:00 às 14:00') 
      .should('be.visible') 
      .click(); 
    cy.get('#shipping-details-sellers > .modal-dialog > .modal-content > .svgIcon').click();
    cy.get('button.btn-finish-order').contains('Finalizar compra').click();
  });

//adicionar produto ao carrinho 
Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.contains('h3', 'Saco Lixo Banheiro Branco Select 50un')
  .parents('a')
  .within(() => {
    cy.get('button').contains('Adicionar').click();
});
  cy.get('button[data-cy="btn-"]').contains('Ver carrinho').click();
  cy.get('a.btn-finish-order').contains('Continuar').click();
  cy.get('button.btn-finish-order').contains('Finalizar compra').click();
});
  
Cypress.Commands.add('novoProduto', () => {
  cy.contains('h3', 'Saco Lixo Banheiro Branco Select 50un')
  .parents('a')
  .within(() => {
    cy.get('button').contains('Adicionar').click();
});
cy.get('button[data-cy="btn-"]').contains('Ver carrinho').click();
});








// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })