Feature: AUTENTICAÇÃO - Logout
Eu, como usuário cadastrado, gostaria de realizar o meu Logout.

  Scenario Outline: Logout realizado com sucesso.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    And Test DONE -> Written "User" on the page
    And I click on the "logOut-button" button
    Then Test DONE -> Written "Home" on the page
    Examples: 
      | EMAIL             | PASSWORD |
      | jhon234@gmail.com | 123456   |