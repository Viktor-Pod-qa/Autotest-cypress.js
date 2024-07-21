describe('Проверка авторизации', function () {                                               
    it('Верный логин и верный пароль', function () {                 
         cy.visit('https://login.qa.studio/');                                              
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     });

     it('Проверка логики восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('viktor.viktor15@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    });

    it('Ввести верный логин и НЕ верный пароль', function () {                  
        cy.visit('https://login.qa.studio/');                                               
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1172');
        cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Ввести НЕ верный логин и верный пароль', function () {                  
        cy.visit('https://login.qa.studio/');                                              
        cy.get('#mail').type('german@dolnikov172.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it(' Ввести логин без @', function () {                  // название теста
        cy.visit('https://login.qa.studio/');                                               
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Проверка на приведение к строчным буквам в логине', function () {                 
        cy.visit('https://login.qa.studio/');                                               
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
})