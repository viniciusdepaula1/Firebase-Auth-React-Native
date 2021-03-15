Feature: Autenticacao - Mudar a senha
Eu como usuário cadastrado, gostaria de mudar a minha senha no aplicativo.

  Scenario Outline: Mudar senha com sucesso.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    And Test DONE -> Written "User" on the page
    And I click on the "change-button" button
    And The "email-input" field is filled with "<PASSWORD2>"
    And The "password-input" field is filled with "<PASSWORD3>"
    And I click on the page
    And I click on the "change-password-button" button
    And Test DONE -> Written "Senha alterada com sucesso" on the page
    And I click on the button with the text "OK"
    Then I click on the "logOut-button" button
    Examples: 
      | EMAIL             | PASSWORD  | PASSWORD2 | PASSWORD3 |
      | jhon234@gmail.com | 123456789 | 123456    | 123456    |

  Scenario Outline: Falha. As senhas não batem.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And I click on the button with the text "LOGAR"
    And Test DONE -> Written "User" on the page
    And I click on the "change-button" button
    And The "email-input" field is filled with "<PASSWORD2>"
    And The "password-input" field is filled with "<PASSWORD3>"
    And I click on the page
    And I click on the "change-password-button" button
    Then Test DONE -> Written "Senhas devem ser iguais" on the page
    Examples: 
      | EMAIL             | PASSWORD | PASSWORD2 | PASSWORD3 |
      | jhon234@gmail.com | 123456   | 12345678  | 123456    |