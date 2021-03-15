Feature: AUTENTICAÇÃO - Excluir usuário
Eu, como usuário cadastrado, gostaria de excluir a minha conta no aplicativo.

  Scenario Outline: Excluir conta de usuário com sucesso.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    And I click on the "erase-button" button
    Then Test DONE -> Written "Home" on the page
    Examples: 
      | EMAIL             | PASSWORD |
      | jhon234@gmail.com | 123456   |