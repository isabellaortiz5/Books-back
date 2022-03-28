/// <reference types="cypress"/>
describe("edit test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })

    it("PUT - edit book",() =>{
        const item = {name: "Clean Architecture: A Craftsman's Guide to Software Structure and Design", author: "Robert C. Martin"}
        cy.request(
            'PUT', 
            "http://localhost:8080/books/1394d2f2-0065-4422-8c76-0ac25b8c9045",
            item
        ).then((response) =>{
            assert.isNotNull(response.body.id)
            assert.isNotNaN(response.body.id)

            assert.isNotNull(response.body.name)
            assert.isNotNull(response.body.author)

            expect(response.body.name).to.equal("Clean Architecture: A Craftsman's Guide to Software Structure and Design")
            expect(response.body.author).to.equal("Robert C. Martin")
        })
        
    })
})