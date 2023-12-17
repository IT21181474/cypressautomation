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
    

})
