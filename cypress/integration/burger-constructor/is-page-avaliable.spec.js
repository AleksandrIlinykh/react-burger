beforeEach(() => {
  cy.viewport(2000, 1000);
});

describe('page is available', function () {
  it('should be available on localhost:3000', function () {
    cy.visit('http://localhost:3000');
  });

  it('should button click', function () {
    cy.get('button').contains('Оформить заказ').click();
    cy.get('button').contains('Войти').click();
    cy.get('[data-test-id=log-in__e-mail]')
      .click()
      .type('Alexanderilinykhdev@yandex.ru');
    cy.get('[data-test-id=log-in__password]').click().type('password');
    cy.get('button').contains('Войти').click();
  });
});
