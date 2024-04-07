const { request } = require("http")

describe('API Testing', () => {
    
    it('Search all users', () => {
        cy.request('GET', 'http://localhost:3000/users').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)
                expect(response.body).length.to.be.lessThan(3)
                expect(response.body.length).to.eq(2)
                expect(response.body[0]).to.have.property('id')
                expect(response.body[0]).to.have.property('name')
                expect(response.body[0]).to.have.property('age')
                expect(response.body[0]).to.contain({
                    id: '1',
                    name: 'David',
                    age: 30
                  });
                expect(response.body[1]).to.have.property('id')
                expect(response.body[1]).to.have.property('name')
                expect(response.body[1]).to.have.property('age')
                expect(response.body[1]).to.contain({
                    id: '2',
                    name: 'John',
                    age: 40
                  });
            }
        )
      })

      it('Create user', () => {
        cy.request('POST', 'http://localhost:3000/users', {id: '3', name: 'Susan', age: 50}).then(
            (response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name')
                expect(response.body).to.have.property('age')
                expect(response.body).to.contain({
                    id: '3',
                    name: 'Susan',
                    age: 50
                  })
            }
        )
      })

      it('Search for created user', () => {
        cy.request('GET', 'http://localhost:3000/users/3').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.contain({
                  id: '3',
                  name: 'Susan',
                  age: 50
                })
            }
        )
      })

      it('Search all users after creation of user', () => {
        cy.request('GET', 'http://localhost:3000/users').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body.length).to.eq(3)
                expect(response.body[0]).to.contain({
                    id: '1',
                    name: 'David',
                    age: 30
                  });
                expect(response.body[1]).to.contain({
                    id: '2',
                    name: 'John',
                    age: 40
                  });
                  expect(response.body[2]).to.contain({
                    id: '3',
                    name: 'Susan',
                    age: 50
                  });  
            }
        )
      })
      
      it('Update created user', () => {
        cy.request('PUT', 'http://localhost:3000/users/3', {id: '3', name: 'Susan', age: 60}).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.contain({
                  id: '3',
                  name: 'Susan',
                  age: 60
                })
            }
        )
      }) 
      
      it('Search for updated user', () => {
        cy.request('GET', 'http://localhost:3000/users/3').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.contain({
                  id: '3',
                  name: 'Susan',
                  age: 60
                })
            }
        )
      })

      it('Delete created user', () => {
        cy.request('DELETE', 'http://localhost:3000/users/3').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.contain({
                  id: '3',
                  name: 'Susan',
                  age: 60
                })
            }
        )
      }) 

      it('Search for deleted user', () => {
        cy.request({method: 'GET', url: 'http://localhost:3000/users/3', failOnStatusCode: false}).then(
            (response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.contains('Not Found')
            }
        )
      })

      it('Search all users after delete of created user', () => {
        cy.request('GET', 'http://localhost:3000/users').then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body.length).to.eq(2)
                expect(response.body[0]).to.contain({
                    id: '1',
                    name: 'David',
                    age: 30
                  });
                expect(response.body[1]).to.contain({
                    id: '2',
                    name: 'John',
                    age: 40
                  });
            }
        )
      })

  })