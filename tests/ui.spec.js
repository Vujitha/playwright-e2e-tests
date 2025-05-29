// @ts-check
import { test, expect } from '@playwright/test';

test('Should have shuffle the cards', async ({ page }) => {
await page.goto('/');

const shufflesCardsTxt = await page.locator('#shuffle').textContent();
console.log('shufflesCardsTxt:', shufflesCardsTxt);
expect(shufflesCardsTxt).toBe('Shuffle the Cards:');
const shufflesCardsUrl = await page.locator('#shuffle + pre').textContent();
console.log('shufflesCardsUrl:', shufflesCardsUrl);
expect(shufflesCardsUrl).toContain('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

});


