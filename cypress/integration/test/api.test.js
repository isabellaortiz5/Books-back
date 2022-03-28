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
})