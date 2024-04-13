//@ts-check
const { test, expect } = require('@playwright/test');
test('Search all users', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody[0]).toHaveProperty('id', '1')
  expect(responseBody[0]).toHaveProperty('name', 'David')
  expect(responseBody[0]).toHaveProperty('age', 30)
  expect(responseBody[1]).toHaveProperty('id', '2')
  expect(responseBody[1]).toHaveProperty('name', 'John')
  expect(responseBody[1]).toHaveProperty('age', 40)
});

test('Create User', async ({ request }) => {
  const response = await request.post("http://localhost:3000/users", {
    data: {
        "id": "3",
        "name": "Susan",
        "age": 50,
        
    }});
  const responseBody = await response.json();
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty('id', '3')
  expect(responseBody).toHaveProperty('name', 'Susan')
  expect(responseBody).toHaveProperty('age', 50)
});