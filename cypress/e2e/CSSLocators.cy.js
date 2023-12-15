const { describe } = require("Cypress")

describe('CSSLocators', () => {
    
    it('csslocators', () => {
      cy.visit("https://www.alibaba.com/?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9922923046&adgrp=97780319022&fditm=&tgt=kwd-14739453&locintrst=&locphyscl=1009919&mtchtyp=e&ntwrk=g&device=c&dvcmdl=&creative=432272607736&plcmnt=&plcmntcat=&aceid=&position=&gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh3wZzPNoU35tQx81aW_ZUyMTk_RragsQt0-wOF3CT9kGXcS_y0eN7waAsq9EALw_wcB")
      cy.get(".search-bar-input util-ellipsis").type("T-Shirts")
      cy.get("#search_btn").click() //id
      cy.get(".text-blue").contains("Elevate Your Style with Trendy Shirts - Find the Perfect Fit for Any Occasion at Lowest Prices")//Assertion

    

    })

    

  })