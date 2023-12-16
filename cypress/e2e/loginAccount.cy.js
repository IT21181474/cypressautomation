describe("login_account_testcase", () => {
    it("login_account_testcase", () => {
       cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
       
       cy.get("[href='https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp']", { timeout: 10000 }).click()
       
       cy.url().should('include', 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp'); // Verify that the URL has changed after clicking the link
 
      
       
       cy.get("[name='email']").should('be.visible').type("yashhettiarachchi8@gmail.com")
       cy.get("[name='password']").should('be.visible').type("createAccT@1")
       

       cy.get("input.btn.btn-lg.btn-primary.space-bot.blocksButton").click();
       

    })
 })
 