class LoginPage {

constructor(page)
{
this.page = page;
this.usernametxt = page.locator("#user-name");
this.passwordtxt = page.locator("#password");
this.loginbtn = page.locator("#login-button");
}
async goto() {
await this.page.goto("https://www.saucedemo.com/");
}

async login(username, password) {
await this.usernametxt.fill(username);
await this.passwordtxt.fill(password);
await this.loginbtn.click();                                                            
}

}

module.exports = LoginPage;
