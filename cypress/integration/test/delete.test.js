/// <reference types="Cypress" />

describe('Delete test', () => {
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })
    it('create book test', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/books',
            body: {
                name:"El Golem",
                author:"Jorge Luis Borges"
            }
   
        }).then((res)=>{
            expect(res.body).has.property("name", "El Golem")
            expect(res.body).has.property("author", "Jorge Luis Borges")
        }).then((res) =>{
               const userId = res.body.id 
                cy.log("user id is: " + userId)
                cy.request({
                    method: 'DELETE',
                    url: 'http://localhost:8080/books/'+userId,
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                })
        })    
    })
})