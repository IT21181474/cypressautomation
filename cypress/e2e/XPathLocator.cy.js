describe('AddToCart', () => {
    
    it('addtocart', () => {
      cy.visit("https://www.kapruka.com/?gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh074LUReaY2He4bDI4mute0O8-pzW5_SIdEDz3jomt0VkkMZTHPwdkaArlzEALw_wcB")
      cy.get("#search_bar_id").should('be.visible').type("Ducky")

      cy.get("#search_btn").click()
      cy.wait(2000)
    //   cy.get("[itemprop='name']").contains("DUCKY IN KAPRUKA")
      cy.url().should('include', 'https://www.kapruka.com/srilanka_online_shopping.jsp?d=ducky')
    //   cy.visit("https://www.kapruka.com/srilanka_online_shopping.jsp?d=ducky")
    //   cy.get("#search_bar_id").should('be.visible').type("T-Shirts");
    //   cy.get("#search_btn").click()
      
      
      //cy.get(".CatalogueV2Design").find(".catalogueV2Repeater").should("have.length",3)
      cy.xpath("//div[@class='CatalogueV2Design']/a").should("have.length",3)
      /*XPath (XML Path Language) is a powerful query language used for navigating XML documents. In the context of web development and testing, XPath is commonly used to locate elements on an HTML page. Here are different ways to use XPath in the context of web development and testing:

### 1. **Absolute XPath:**
   - **Syntax:** `/html/body/div[1]/div[2]/span`
   - Absolute XPath specifies the complete path from the root element to the target element. It begins with a single forward slash `/` and provides the full hierarchy.

### 2. **Relative XPath:**
   - **Syntax:** `//div[@class='example']//span`
   - Relative XPath starts from the current node using `//`. It allows you to find an element anywhere in the document, not just from the root. This makes it more flexible than absolute XPath.

### 3. **XPath with Attribute:**
   - **Syntax:** `//input[@id='username']`
   - You can use attribute conditions to identify an element. For example, selecting an input element with a specific ID.

### 4. **XPath with Text Content:**
   - **Syntax:** `//p[text()='Hello World']`
   - XPath can be used to locate elements based on their text content. This is useful for finding elements with specific text.

### 5. **XPath with Contains Function:**
   - **Syntax:** `//div[contains(@class, 'partial-class')]`
   - The `contains` function is helpful when the attribute value is dynamic or only a part of it is known. It checks if the attribute contains the specified value.

### 6. **XPath with Logical Conditions:**
   - **Syntax:** `//input[@type='text' and @name='username']`
   - You can use logical conditions (`and`, `or`) to combine multiple criteria for locating an element.

### 7. **XPath Axes:**
   - **Syntax:** `//a[@class='link']/following-sibling::p`
   - Axes in XPath allow you to navigate through the hierarchical structure of the XML document. Common axes include `child::`, `parent::`, `following-sibling::`, and `preceding-sibling::`.

### 8. **XPath Indexing:**
   - **Syntax:** `(//div[@class='example'])[2]`
   - You can use indexing to select a specific occurrence of an element when there are multiple elements with the same XPath. Indexing starts from 1.

### 9. **XPath Wildcard:**
   - **Syntax:** `//*[@class='example']`
   - The `*` acts as a wildcard and matches any element. This is useful when you want to select any element with a specific attribute.

### 10. **XPath with Multiple Predicates:**
   - **Syntax:** `//input[@type='text'][@name='username']`
   - Multiple predicates can be used to narrow down the selection. Each predicate is enclosed in square brackets `[]`.

These are some of the common ways to use XPath in web development and testing. The choice of XPath depends on the specific context, the structure of the HTML, and the requirements of the test. It's often a good practice to prefer relative XPaths for better maintainability. */

      cy.xpath("//div[@class='catalogueV2Button']").eq(1).click()
      cy.wait(2000)
      cy.get("#addtocartbutton").click()

      
     
      
    })
    

    })
