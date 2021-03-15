## Firebase-Auth-React-Native

Este projeto tem como objetivo auxiliar os desenvolvedores mobile do terralab a construir uma aplicação com serviço de autenticação utilizando o Firebase Authentication. <br />
Antes de executar o app certifique-se de instalar as dependências, utilize os seguintes comandos no diretório em que o app está localizado: 
### `yarn`
Para executar o app, utilize o comando:
### `yarn android`
Para utilizar as funções do firebase você precisa adicionar seu arquivo "googles-services.json" na pasta "android\app", para gerar este arquivo utilize o [Console Firebase](https://firebase.google.com/?hl=pt-br).

## Serviço de autenticação
 
Para adicionar o firebase em seu projeto react native utilize o [Console Firebase](https://firebase.google.com/?hl=pt-br).<br />
Tutorial de instalação das libs base do firebase para utilização no react native pode ser encontrado [aqui](https://rnfirebase.io/).<br /> 
Tutorial de instalação do módulo de autenticação que utilizamos neste projeto para se comunicar com o firebase [aqui](https://rnfirebase.io/auth/usage).<br />
 
## O Projeto

O aplicativo possui funções para fazer login, logout, cadastro, resetar senha e mudar senha, todas ligadas ao firebase. <br />
A context api foi utilizada para fornecer para as telas do app todas as funções do firebase necessárias. <br />
O arquivo está [aqui](https://gitlab.com/frameworks-mobile/firebase-base-tutorial/-/blob/master/src/contexts/authContext.js) e deve ser utilizado como base para desenvolvimento de outros apps no lab. <br />
Para navegação, utilizamos a lib react-navigation, definida como padrão em projetos no terralab.<br />
O tipo de autenticação utilizada foi a e mail/senha.<br />
