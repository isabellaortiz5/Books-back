/// <reference types="cypress"/>
describe("Add test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })

    it("forced POST - add book",() =>{
        cy.request({
            method: 'POST', 
            url: "http://localhost:8080/books",
            body: {
                name: "Divina Commedia",
                author:"Dante Alighieri" 
            }
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            assert.isNotNull(response.body.id)
            assert.isNotNaN(response.body.id)

            assert.isNotNull(response.body.name)
            assert.isNotNull(response.body.author)

            expect(response.body.name).to.equal("Divina Commedia")
            expect(response.body.author).to.equal("Dante Alighieri")
        })
    })

    it("self POST - add book",() =>{
        cy.intercept({
            method: 'POST', 
            url: "http://localhost:8080/books", 
        }).as("book_create")

        cy.get(".table-button.ant-btn.ant-btn-primary").click()
        cy.get("#name").click()
        cy.wait(500).get("#name").type("rayuela")
        cy.wait(500).get("#author").type("julio cortázar")
        cy.contains('Save').click()

        cy.wait('@book_create')
        .then( (response) =>{
            expect(response.state).to.equal("Complete")
            assert.isNotNull(response.id)
            assert.isNotNaN(response.id)

            assert.isNotNull(response.request.body.name)
            assert.isNotNull(response.request.body.author)

            expect(response.request.body.name).to.equal("rayuela")
            expect(response.request.body.author).to.equal("julio cortázar")

            expect(response.response.statusCode).to.eq(200)
        })
    })

})