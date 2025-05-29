const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../data/testData.json');


test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);
    await expect(page).toHaveTitle("Swag Labs");
})
