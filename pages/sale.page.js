class Sale {
  get viewAllSale() {
    // css selector
    return $(".level0.nav-5.parent > .has-children.level0");
  }

  get filterwithPrice() {
    // css selector
    return $("li:nth-of-type(1) > a > span:nth-of-type(2)");
  }

  clickOnViewAllSale() {
    if (this.viewAllSale.isDisplayed() === true) {
      this.viewAllSale.click();
    }
    browser.pause(2000);
  }

  clickOnFilterWithPrice() {
    if (this.filterwithPrice.isDisplayed() === true) {
      this.filterwithPrice.click();
    }
    browser.pause(2000);
  }
}

module.exports = new Sale();
