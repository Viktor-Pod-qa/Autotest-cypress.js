import * as data from "../data_user/data_user.json"

describe('Покупка аватара', function () {                                               // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {                  // название теста
         cy.visit('https://pokemonbattle.ru/');                                         // переходим на сайт https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type(data.user_login);                  // вводим логин
         cy.get('#password').type(data.user_password);                                  // вводим пароль
         cy.get('.auth__button').click();                                               // нажимаем кнопку Войти
         cy.get('.header__btns > :nth-child(4)').click();                               // нажимаем кнопку Магазин
         cy.get(':nth-child(4) > .shop__button').click();                               // кликаем по кнопке Купить у доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2202201557873110');    // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0926');                      // вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');     // вводим CVV карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('PODKYUKO CEMEN');  // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');                     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });