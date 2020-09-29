class Ecom {
  get accountLink() {
    // css selector
    return $(".skip-account.skip-link > .label");
  }

  get loginLink() {
    // css selector
    return $("a[title='Log In']");
  }

  clickOnAccountLink() {
    if (this.accountLink.isDisplayed() === true) {
      this.accountLink.click();
    }
    browser.pause(1000);
  }

  clickOnLoginLink() {
    if (this.loginLink.isDisplayed() === true) {
      this.loginLink.click();
    }
    browser.pause(1000);
  }
}

module.exports = new Ecom();
