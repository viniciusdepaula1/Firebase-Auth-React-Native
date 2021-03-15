Feature: Autenticação - LOGIN
Eu, como usuário cadastrado, gostaria de fazer login no aplicativo.

  @AFuncionalidadeFoiTestadaEEstáfuncionando.
  Scenario Outline: Login realizado com sucesso.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    And Test DONE -> Written "User" on the page
    Then I click on the "logOut-button" button
    Examples: 
      | EMAIL             | PASSWORD |
      | jhon234@gmail.com | 123456   |

  Scenario Outline: Login falha, erro de email não existente
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    Then Test DONE -> Written "auth/user-not-found" on the page
    Examples: 
      | EMAIL               | PASSWORD |
      | naoexiste@gmail.com | 123456   |

  Scenario Outline: Login falha, erro de senha
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    Then Test DONE -> Written "Senha errada" on the page
    Examples: 
      | EMAIL             | PASSWORD |
      | jhon234@gmail.com | 12345678 |