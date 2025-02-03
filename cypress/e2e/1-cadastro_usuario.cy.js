describe('Cadastro de Usuário', () => {
  
  beforeEach(() => {
    cy.visit('cadastro'); 
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    const userData = {
      nome: 'Cardo Silva',
      cpf: '599.379.950-19',
      email: 'cardo.teste@email.com',
      cellphone: '92987654321',
      password: 'Qwerty123@',
      password2: 'Qwerty123@'
    };

    cy.cadastroUsuario(userData);

  });
});


