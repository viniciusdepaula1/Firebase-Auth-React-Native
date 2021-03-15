Feature: AUTENTICAÇÃO - Recuperar senha
Eu, como usuário cadastrado, gostaria de recuperar a minha senha.

  Scenario Outline: Recuperar senha com sucesso
    Given I'm on the home page
    When I click on the "signIn-button" button
    And I click on the "recovery-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And I click on the button with the text "Enviar"
    Then Test DONE -> Written "Home" on the page
    Examples: 
      | EMAIL             |
      | jhon234@gmail.com |

  Scenario Outline: Falha em recuperar senha. Email do usuário não existe.
    Given I'm on the home page
    When I click on the "signIn-button" button
    And I click on the "recovery-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And I click on the button with the text "Enviar"
    Then Test DONE -> Written "Usuário não encontrado" on the page
    Examples: 
      | EMAIL               |
      | naoexiste@gmail.com |

  Scenario Outline: Recuperar senha com sucesso
    Given I'm on the home page
    When I click on the "signIn-button" button
    And I click on the "recovery-button" button
    And The "email-input" field is filled with "<EMAIL>"
    And I click on the button with the text "Enviar"
    Then Test DONE -> Written "Email inválido" on the page
    Examples: 
      | EMAIL         |
      | qualqueremail |