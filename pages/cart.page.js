class Cart {
  get addToCart() {
    // css selector
    return $(".product-shop button[title='Add to Cart'] > span > span");
  }

  get addedToCartMessage() {
    return $(
      // xpath
      "//html[@id='top']/body/div[@class='wrapper']/div[@class='page']//ul[@class='messages']/li/ul//span[.='Slim fit Dobby Oxford Shirt was added to your shopping cart.']"
    );
  }

  clickOnAddToCart() {
    if (this.addToCart.isDisplayed() === true) {
      this.addToCart.click();
    }
    browser.pause(2000);
  }
}

module.exports = new Cart();
