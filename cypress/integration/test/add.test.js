/// <reference types="cypress"/>
describe("Add test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })

    it("Add a new item & Verify exists",() =>{
        cy.request({
            method: 'POST', 
            url: "http://localhost:8080/books",
            body: {
                name: "Divina Commedia",
                author:"Dante Alighieri" 
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)

            expect(response.body).to.have.property("name", "Divina Commedia")
            expect(response.body).to.have.property("author", "Dante Alighieri")

        })
    })

    it("forced POST - adding empty book",() =>{
        cy.request({
            method: 'POST', 
            url: "http://localhost:8080/books",
            body: {
                name: "",
                author:"" 
            }
        })
        .then((response) =>{
            expect(response.status).not.to.eq(200)
        })
    })

    it("Empty POST",() =>{
        cy.request({
            failOnStatusCode: false,
            method: 'POST', 
            url: "http://localhost:8080/books",
        })
        .then((response) =>{
            expect(response.status).to.eq(400)
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


    it("Invalid POST - add book",() =>{
        cy.request({
            failOnStatusCode: false,
            method: 'POST', 
            url: "http://localhost:8080/books",
            
        }).then((response) =>{
            expect(response.status).to.eq(400)
        })
        
    })
})