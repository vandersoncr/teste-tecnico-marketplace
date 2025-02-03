#Projeto de Automação Web  

#Cenários de testes
Criar novo Usuário
Realizar login com credenciais Válidas
Adicionar produto no carrinho
Compra via cartão de crédito
Compra via boleto bancário

#Passo a passo para instalação
Baixar o Node atráves do link: https://nodejs.org/en/
Instalar o Node
Verificar se o Node Foi instalado corretamente abrindo o cmd e digitando: $ node --version
Instalar o npm no path do computador atráves do comando: $ npm install
Verificar se o npm foi instalado corretamente atráves do comando: $ npm --version
Instalar cypress atráves do comando: $ npm install cypress --save-dev
Verificar se o cypress foi instalado corretamente atráves do comando: npx cypress --version
Instalar o cypress atráves do comando: npm install cypress --save-dev
Instalar o Mocha Report atráves do comando: npm install mochawesome@7.1.3 --save-dev

#Execução no front
npx cypress open

#Execução no Headless
npx cypress run

#Executar com Report
npx cypress run --reporter mochawesome
