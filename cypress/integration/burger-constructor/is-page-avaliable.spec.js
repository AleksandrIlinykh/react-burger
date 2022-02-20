beforeEach(() => {
  cy.viewport(2000, 1000);
});

describe('page is available', function () {
  it('should be available on localhost:3000', function () {
    cy.visit('http://localhost:3000');
  });

  it('should login', function () {
    cy.get('button').contains('Оформить заказ').click();
    cy.get('button').contains('Войти').click();
    cy.get('[data-test-id=log-in__e-mail]')
      .click()
      .type('Alexanderilinykhdev@yandex.ru');
    cy.get('[data-test-id=log-in__password]').click().type('password');
    cy.get('button').contains('Войти').click();
    cy.wait(1000);
    cy.get('[data-test-id=log-in__e-mail]').should('not.exist');
  });

  it('should drag & drop & make order', function () {
    const dataTransfer = new DataTransfer();
    cy.get('[data-test-id=60d3b41abdacab0026a733c6]').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('[data-test-id=burger-constructor]').trigger('drop', {
      dataTransfer,
    });
    cy.get('span').contains('Краторная булка N-200i (верх)');

    cy.get('[data-test-id=submit-order-button]').click();
    cy.get('[data-test-id=order-details-modal]');
    cy.wait(20000);
    cy.get('[data-test-id=order-number]');
  });

  it('should close order modal', function () {
    cy.wait(4000);
    cy.get('[data-test-id=modal-close-icon]').click();
    cy.wait(1000);
    cy.get('[data-test-id=modal-close-icon]').should('not.exist');
  });

  it('should open correct ingredients details modal  & close', function () {
    cy.get('[data-test-id=60d3b41abdacab0026a733c6]').click();
    cy.get('[data-test-id=ingredient-name]').contains('Краторная булка N-200i');
    cy.get('[data-test-id=ingredient-calories]').contains('420');
    cy.get('[data-test-id=ingredient-proteins]').contains('80');
    cy.get('[data-test-id=ingredient-fat]').contains('24');
    cy.get('[data-test-id=ingredient-carbohydrates]').contains('53');
    cy.wait(4000);
    cy.get('[data-test-id=modal-close-icon]').click();
    cy.wait(1000);
    cy.get('[data-test-id=modal-close-icon]').should('not.exist');
  });

});
