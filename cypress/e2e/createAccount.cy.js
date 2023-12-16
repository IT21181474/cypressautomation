describe("create_account_testcase", () => {
    it("create_account_testcase", () => {
       cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
       
       cy.get("[href='https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp']", { timeout: 10000 }).click()
       
       cy.url().should('include', 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp'); // Verify that the URL has changed after clicking the link
 
       cy.contains('Create Account').click(); // Replace 'Create Account' with the actual text on the button
 
       cy.url().should('include', 'https://www.kapruka.com/shops/customerAccounts/accountNew.jsp?origination=regular'); // Verify that the URL has changed after clicking the link
       
       cy.get("[name='firstName']").should('be.visible').type("Yashini")
       cy.get("[name='lastName']").should('be.visible').type("Hettiarachchi")
       cy.get("[name='email']").should('be.visible').type("yashhettiarachchi8@gmail.com")
       cy.get("[name='password']").should('be.visible').type("createAccT@1")
       cy.get("[name='passwordReConfirm']").should('be.visible').type("createAccT@1")

       cy.contains('Create Account').click(); 
       

    })
 })
 