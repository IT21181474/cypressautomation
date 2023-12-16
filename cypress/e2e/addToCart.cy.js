describe('AddToCart', () => {
    
    it('addtocart', () => {
      cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
      cy.get("#search_bar_id").should('be.visible').type("Ducky");

      cy.get("#search_btn").click()
      cy.wait(2000)
    //   cy.get("[itemprop='name']").contains("DUCKY IN KAPRUKA")
      cy.url().should('include', 'https://www.kapruka.com/srilanka_online_shopping.jsp?d=ducky');
    //   cy.visit("https://www.kapruka.com/srilanka_online_shopping.jsp?d=ducky")
    //   cy.get("#search_bar_id").should('be.visible').type("T-Shirts");
    //   cy.get("#search_btn").click()
      
      
      cy.get(".CatalogueV2Design").find(".catalogueV2Repeater").should("have.length",3)
      cy.get(".CatalogueV2Design").find(".catalogueV2Button").eq(1).contains("See Details").click()
      cy.wait(2000)
      cy.get("#addtocartbutton").click()



     
      
    })
    

    })
