Feature: Autenticação - CADASTRAR
Eu, como usuário não cadastrado, gostaria de fazer meu cadastro no aplicativo.

  @AFuncionalidadeFoiTestadaEEstáfuncionando.
  Scenario Outline: Cadastro realizado com sucesso.
    Given I'm on the home page
    When I click on the "signUp-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And The "password-confirm-input" field is filled with "<REPASSWORD>"
    And I click on the button with the text "CADASTRAR"
    And Test DONE -> Written "User" on the page
    Then I click on the "logOut-button" button
    Examples: 
      | EMAIL             | PASSWORD  | REPASSWORD |
      | jhon234@gmail.com | 123456789 | 123456789  |

  Scenario Outline: Cadastro falha, email do usuário já existe.
    Given I'm on the home page
    When I click on the "signUp-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And The "password-input" field is filled with "<PASSWORD>"
    And The "password-confirm-input" field is filled with "<REPASSWORD>"
    And I click on the button with the text "CADASTRAR"
    Then Test DONE -> Written "Email em uso" on the page
    Examples: 
      | EMAIL             | PASSWORD  | REPASSWORD |
      | jhon234@gmail.com | 123456789 | 123456789  |