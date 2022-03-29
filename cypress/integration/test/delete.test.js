/// <reference types="Cypress" />

describe('Delete test', () => {
    beforeEach(() =>{
        //set-up
        cy.visit('http://localhost:4200/dashboard')
    })
    it('create and delete book test', () => {
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

    it("no id DELETE - delete book",() =>{
        cy.request({
            failOnStatusCode: false,
            method: 'DELETE',
            url: 'http://localhost:8080/books/'
            
        }).then((response) =>{
            expect(response.status).to.eq(405)
        })   
    })

    
    it("Invalid id DELETE - delete book",() =>{
        cy.request({
            failOnStatusCode: false,
            method: 'DELETE',
            url: 'http://localhost:8080/books/jnjnjnn'
            
        }).then((response) =>{
           expect(response.status).not.to.eq(200)
        })
    })
})