class Search {
  get searchBox() {
    return $("input#search");
  }

  get searchButton() {
    return $("button[title='Search']");
  }

  get specificProduct() {
    return $(".product-info  a[title='Slim fit Dobby Oxford Shirt']");
  }

  get dropdownMenu() {
    return $("#attribute92");
  }

  get dropdownMenuOptionBlue() {
    return $("#attribute92 option:nth-child(2)");
  }

  get dropdownMenuSize() {
    return $("#attribute180");
  }

  get dropdownMenuOptionSize() {
    return $("#attribute180 option:nth-child(2)");
  }

  clickDropDownMenu() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.click();
  }

  clickDropDownMenuOptionBlue() {
    this.dropdownMenuOptionBlue.waitForDisplayed();
    this.dropdownMenuOptionBlue.click();
  }

  clickDropDownMenuSize() {
    this.dropdownMenuSize.waitForDisplayed();
    this.dropdownMenuSize.click();
  }

  clickDropDownMenuOptionSize() {
    this.dropdownMenuOptionSize.waitForDisplayed();
    this.dropdownMenuOptionSize.click();
  }

  enterSearchBoxText(text) {
    this.searchBox.waitForDisplayed();
    this.searchBox.setValue(text);
  }

  clickSearchButton() {
    if (this.searchButton.isDisplayed() === true) {
      this.searchButton.click();
    }
  }

  clickOnSpecificProduct() {
    if (this.specificProduct.isDisplayed() === true) {
      this.specificProduct.click();
    }
  }
}

module.exports = new Search();
