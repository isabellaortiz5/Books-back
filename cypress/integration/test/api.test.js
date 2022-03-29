/// <reference types="cypress"/>

const exp = require("constants")

describe("API test", () =>{

    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })

    it('verify request returns JSON', () => {
        cy.request('http://localhost:8080/books').its('headers').its('content-type').should('include', 'application/json')
    })
    
    it('verify the request returns the correct status code', () => {
        cy.request('http://localhost:8080/books').its('status').should('be.equal', 200)
    })

    it("verify the resquest returns a body",() =>{
        cy.request({method: 'GET', url: "http://localhost:8080/books"}).then((response) =>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('verify the request returns items structure', () => {
        cy.request('http://localhost:8080/books').its('body').should("not.be.null")
      })
})