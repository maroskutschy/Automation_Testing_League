//@ts-check
const { test, expect } = require('@playwright/test');
test('Search all users', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody.length).toBe(2)
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

test('Search for created user', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users/3");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty('id', '3')
  expect(responseBody).toHaveProperty('name', 'Susan')
  expect(responseBody).toHaveProperty('age', 50)
});

test('Search all users after creation of user', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody.length).toBe(3)
  expect(responseBody[0]).toHaveProperty('id', '1')
  expect(responseBody[0]).toHaveProperty('name', 'David')
  expect(responseBody[0]).toHaveProperty('age', 30)
  expect(responseBody[1]).toHaveProperty('id', '2')
  expect(responseBody[1]).toHaveProperty('name', 'John')
  expect(responseBody[1]).toHaveProperty('age', 40)
  expect(responseBody[2]).toHaveProperty('id', '3')
  expect(responseBody[2]).toHaveProperty('name', 'Susan')
  expect(responseBody[2]).toHaveProperty('age', 50)
});

test('Update created user', async ({ request }) => {
  const response = await request.put("http://localhost:3000/users/3", {
    data: {
        "id": "3",
        "name": "Susan",
        "age": 60,
        
    }});
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty('id', '3')
  expect(responseBody).toHaveProperty('name', 'Susan')
  expect(responseBody).toHaveProperty('age', 60)
});

test('Search for updated user', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users/3");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty('id', '3')
  expect(responseBody).toHaveProperty('name', 'Susan')
  expect(responseBody).toHaveProperty('age', 60)
});

test('Delete created user', async ({ request }) => {
  const response = await request.delete("http://localhost:3000/users/3");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody).toHaveProperty('id', '3')
  expect(responseBody).toHaveProperty('name', 'Susan')
  expect(responseBody).toHaveProperty('age', 60)
});

test('Search for deleted user', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users/3");
  expect(response.status()).toBe(404);
  const body = await response.text();
  expect(body).toBe('Not Found');
});

test('Search all users after delete of user', async ({ request }) => {
  const response = await request.get("http://localhost:3000/users");
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(responseBody.length).toBe(2)
  expect(responseBody[0]).toHaveProperty('id', '1')
  expect(responseBody[0]).toHaveProperty('name', 'David')
  expect(responseBody[0]).toHaveProperty('age', 30)
  expect(responseBody[1]).toHaveProperty('id', '2')
  expect(responseBody[1]).toHaveProperty('name', 'John')
  expect(responseBody[1]).toHaveProperty('age', 40)
});