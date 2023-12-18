describe("indian",()=>{
    it("indian",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//*[@id='root']/div/header/div/div[2]/form/input").type("ca")
        cy.get(".product:visible").should("have.length",4)
        cy.get("div.products").find(".product").each(($el, index, $list)=>{
            const Cashews=$el.find("h4.product-name").text()
            if (Cashews.includes("Cashews")){
                $el.find("Button").click()
        }
        
            
    })
})
})
