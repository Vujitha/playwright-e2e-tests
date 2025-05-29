import { test, expect } from '@playwright/test';

test('API test - Shuffle a deck of cards', async ({ request }) => {
  // Make a GET request to shuffle a new deck of cards
  const response = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  
  // Assert the response status is 200
  expect(response.status()).toBe(200);

  // Parse the response JSON
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  // Assert the response contains the expected keys and values
  expect(responseBody).toHaveProperty('success', true);
  expect(responseBody).toHaveProperty('deck_id');
  expect(responseBody).toHaveProperty('remaining', 52);
});