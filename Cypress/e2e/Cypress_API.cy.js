const { request } = require("http")

describe('API Testing', () => {
    
    it('GET users', () => {
        cy.request('GET', 'http://localhost:3000/users').then(
            (response) => {
                expect(response.status).to.eq(200)
                // expect(response.body).length.to.be.greaterThan(1)
                // expect(response.body).length.to.be.lessThan(3)
                // expect(response.body.length).to.eq(2)
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

      it('POST user', () => {
        cy.request('POST', 'http://localhost:3000/users', {id: '3', name: 'Susan', age: 50}).then(
            (response) => {
                expect(response.status).to.eq(201)
                //expect(response.body.length).to.eq(1)
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
  })