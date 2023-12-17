describe("login_account_testcase", () => {
    // 1. Navigate to the main website URL
    it("should navigate to the main website", () => {
        cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
    })

    // 2. Click on the login link to navigate to the login page
    it("should click on the login link and navigate to the login page", () => {
        cy.get("[href='https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp']", { timeout: 10000 }).click()
        cy.url().should('include', 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp'); // Verify that the URL has changed after clicking the link
    })

    // 3. Fill in the login form with valid credentials and click on the login button
    it("should fill in the login form and click on the login button", () => {
        cy.get("[name='email']").should('be.visible').type("yashhettiarachchi8@gmail.com")
        cy.get("[name='password']").should('be.visible').type("createAccT@1")

        cy.get("input.btn.btn-lg.btn-primary.space-bot.blocksButton").click();
    })

    // 4. Perform assertions to ensure that the login was successful
    // TODO: Implement this test case once the application supports assertions after successful login
})