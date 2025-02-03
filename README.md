# Projeto de Automação Web

## Cenários de Testes
- Criar novo Usuário  
- Realizar login com credenciais válidas  
- Adicionar produto no carrinho  
- Compra via cartão de crédito  
- Compra via boleto bancário  

## Passo a Passo para Instalação

1. **Baixar o Node.js** através do link: [Node.js](https://nodejs.org/en/)  
2. **Instalar o Node.js**  
3. **Verificar se o Node.js foi instalado corretamente** abrindo o terminal e digitando:  
   node --version

4. **Instalar o npm no path do computador** através do comando:  
   npm install

5. **Verificar se o npm foi instalado corretamente** através do comando:  
   npm --version

6. **Instalar Cypress** através do comando:  
   npm install cypress --save-dev

7. **Verificar se o Cypress foi instalado corretamente** através do comando:  
   npx cypress --version

8. **Instalar o Mocha Report** através do comando:  
   npm install mochawesome@7.1.3 --save-dev
 

## Execução dos Testes

### **Execução no modo interativo (GUI)**
npx cypress open

### **Execução no modo Headless**
npx cypress run

### **Executar com Report**
npx cypress run --reporter mochawesome


