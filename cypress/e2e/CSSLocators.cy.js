
describe('CSSLocators', () => {
    
    it('csslocators', () => {
      cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
      cy.get("#search_bar_id").should('be.visible').type("T-Shirts")

      cy.get("#search_btn").click()
      cy.get("[itemprop='name']").contains("T shirts")
      
    

    })

    

  })