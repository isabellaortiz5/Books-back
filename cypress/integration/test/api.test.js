/// <reference types="cypress"/>

const exp = require("constants")

describe("API test", () =>{
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })

    it("GET - body",() =>{
        cy.request({method: 'GET', url: "http://localhost:8080/books"}).then((response) =>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it("POST - add book",() =>{
        cy.request({
            method: 'POST', 
            url: "http://localhost:8080/books",
            body: {
                name: "Cien años de soledad",
                author:"Gabriel García Márquez" 
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
            assert.isNotNull(response.body.id)
            assert.isNotNaN(response.body.id)

            assert.isNotNull(response.body.name)
            assert.isNotNull(response.body.author)

            expect(response.body.name).to.equal("Cien años de soledad")
            expect(response.body.author).to.equal("Gabriel García Márquez")
        })
    })

    /*

    it("POST - add book",() =>{
        const item = {"name":"Cien años de soledad","author":"Gabriel García Márquez"}

        cy.request('POST',"http://localhost:8080/books", item)
        .its('body')
        .should('include',{name:"Cien años de soledad",author:"Gabriel García Márquez"})

    })

    it("PUT - book",() =>{
        const item = {"name":"Cien años de soledad"}

        //cy.request('PUT',"http://localhost:8080/books", item)
        //.its('body')
    })
    */
})