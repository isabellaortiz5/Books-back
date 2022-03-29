/// <reference types="cypress"/>

const { url } = require("inspector")

describe("edit test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })


    it("PUT - edit book",() =>{
        const item = {
            name: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            author: "Robert C. Martin"}
        cy.request(
            'PUT', 
            "http://localhost:8080/books/1394d2f2-0065-4422-8c76-0ac25b8c9045",
            item
        ).then((response) =>{
            assert.isNotNull(response.body.id)
            assert.isNotNaN(response.body.id)

            expect(response.body).to.have.property("name", "Clean Architecture: A Craftsman's Guide to Software Structure and Design")
            expect(response.body).to.have.property("author", "Robert C. Martin")
        })    
    })

    it("invalid PUT - edit",() =>{
        cy.request({
            failOnStatusCode: false,
            method: 'PUT', 
            url: "http://localhost:8080/books/1394d2f2-0065-4422-8c76-0ac25b8c9045"
        }).then((response) =>{
            expect(response.status).to.eq(400)
        })
        
    })
    it("PUT - edit book with empty fields",() =>{
        const item = {name: "", author: ""}
        cy.request({
            failOnStatusCode: false,
            method: 'PUT', 
            url: "http://localhost:8080/books/1394d2f2-0065-4422-8c76-0ac25b8c9045",
            item
        }).then((response) =>{
            expect(response.status).to.eq(400)
        })    
    })

    it("PUT - edit book with one empty field ",() =>{
        const item = {name: "Divergente", author: ""}
        cy.request({
            failOnStatusCode: false,
            method: 'PUT', 
            url: "http://localhost:8080/books/1394d2f2-0065-4422-8c76-0ac25b8c9045",
            item
        }).then((response) =>{
            expect(response.status).to.eq(400)
        })    
    })

    it("PUT - edit book with invalid ID",() =>{
        const item = {
            name: "Harry Potter",
            author: "J.K Rowling"}
        cy.request(
            'PUT', 
            "http://localhost:8080/books/hghfjhfvbjhghmhj",
            item
        ).then((response) =>{
            assert.isNotNull(response.body.id)
            assert.isNotNaN(response.body.id)

            expect(response.status).not.to.eq(200)

        })    
    })

})