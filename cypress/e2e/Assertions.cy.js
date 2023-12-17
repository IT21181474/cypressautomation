describe('Assertions demo', () => {
    
    it('Implicit Assertions', () => {
      cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
      //should and
    //   cy.url().should("include","kapruka.com")
    //   cy.url().should('eq',"https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
    //   cy.url().should('contain',"kapruka")

    //   cy.url().should("include","kapruka.com")
    //   .should('eq',"https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
    //   .should('contain',"kapruka")

      cy.url().should("include","kapruka.com")
      .and('eq',"https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
      .and('contain',"kapruka")
      .and('not.contain',"greenkapruka")

      cy.title().should("include","Kapruka.com")
    //   Kapruka.com | Sri Lanka Online Shopping Site | Send Gifts to Sri Lanka
    .and("eq","Kapruka.com | Sri Lanka Online Shopping Site | Send Gifts to Sri Lanka")
    .and("contain","Kapruka")

    cy.get('#logo > a > .img-responsive').should("be.visible")
    .and("exist")

    cy.xpath("//script").should("have.length",'28')//check the no of links
    //cy.xpath("//script").should("have.length",28)//check the no of links
    
        
   })


   it("Explicit Assertions", () => {
    cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
    
    cy.get("[href='https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp']", { timeout: 10000 }).click()
    
    cy.url().should('include', 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp') // Verify that the URL has changed after clicking the link

   
    cy.get("[name='email']").should('be.visible').type("yashhettiarachchi8@gmail.com")
    cy.get("[name='password']").should('be.visible').type("createAccT@1")
    cy.get("[name='password']").should('have.value',"createAccT@1")
    

    cy.get("input.btn.btn-lg.btn-primary.space-bot.blocksButton").click()

    let expName="Yashini Hettiarachchi"
    cy.xpath("/html/body/div[2]/div/div/div/div[1]/div/h1").then( (x)=>{
        let actName=x.text()
                
        //BDD Style
        expect(actName).to.equal(expName)
        //expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName, expName)
        //assert.notEqual(actName, expName)
        



    })

    

    
   })
    
    

})
