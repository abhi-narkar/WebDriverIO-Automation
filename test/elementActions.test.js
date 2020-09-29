const ecomPage = require("../pages/ecom.page");
const loginPage = require("../pages/login.page");
const searchPage = require("../pages/search.page");
const cartPage = require("../pages/cart.page");
const salePage = require("../pages/sale.page");

const { expect, assert } = require("chai");

//Go to login page
describe("Test element actions", function () {
  it("should click element", () => {
    browser.maximizeWindow();
    browser.url("/ecom");
    ecomPage.clickOnAccountLink();
    ecomPage.clickOnLoginLink();
    expect(browser.getUrl()).equals(
      "http://www.ctqatest.biz/ecom/customer/account/login/"
    );
  });

  // Enter username and password
  it("Should enter username", () => {
    loginPage.enterUsername("test@test.com");
    assert.equal("test@test.com", loginPage.username.getValue());
  });

  it("Should enter password", () => {
    loginPage.enterPassword("ThisIs@T3st.");
    assert.equal("ThisIs@T3st.", loginPage.password.getValue());
    const login = $("#send2");
    login.click();
    browser.pause(2000);
  });

  // Check for error message displayed
  it("should get error message", () => {
    expect(loginPage.errorMessage.getText()).equals(
      "Invalid login or password."
    );
    browser.refresh();
  });

  // Leaving username and password fields blank
  it("Should enter username", () => {
    loginPage.enterUsername("");
    assert.equal("", loginPage.username.getValue());
  });

  it("Should enter password", () => {
    loginPage.enterPassword("");
    assert.equal("", loginPage.password.getValue());
    const login = $("#send2");
    login.click();
    browser.pause(2000);
  });

  // Check if the validation message appears
  it("should ask to enter required field", () => {
    expect(loginPage.credentialsRequiredMessage.getText()).equals(
      "This is a required field."
    );
    browser.refresh();
  });

  // To find searchbox and search by text 'shirt'
  it("Should enter keyword", () => {
    searchPage.enterSearchBoxText("shirt");
    assert.equal("shirt", searchPage.searchBox.getValue());
    searchPage.clickSearchButton();
    expect(browser.getUrl()).equals(
      "http://www.ctqatest.biz/ecom/catalogsearch/result/?q=shirt"
    );
    browser.pause(2000);
  });

  // Select ‘Slim Fit Dobby Oxford Shirt’ from the results
  it("Should select specific product", () => {
    searchPage.clickOnSpecificProduct();
    expect(browser.getUrl()).equals(
      "http://www.ctqatest.biz/ecom/slim-fit-dobby-oxford-shirt-567.html"
    );
    browser.pause(3000);
  });

  //  Select the color and size from the given dropdown menu
  it("Should select option color", () => {
    searchPage.clickDropDownMenu();
    searchPage.clickDropDownMenuOptionBlue();
    assert.equal(true, searchPage.dropdownMenuOptionBlue.isSelected());
  });

  it("Should select option size", () => {
    searchPage.clickDropDownMenuSize();
    searchPage.clickDropDownMenuOptionSize();
    assert.equal(true, searchPage.dropdownMenuOptionSize.isSelected());
    browser.pause(3000);
  });

  // Add the product to cart
  it("Should click on add to cart", () => {
    cartPage.clickOnAddToCart();
    browser.pause(3000);
  });

  //Validate if the product has been succesfully added to cart
  it("should get validation message", () => {
    expect(cartPage.addedToCartMessage.getText()).equals(
      "Slim fit Dobby Oxford Shirt was added to your shopping cart."
    );
  });

  // Click on sale page and verify if it displays all sale products
  it("Should click on sale page", () => {
    salePage.clickOnViewAllSale();
    expect(browser.getUrl()).equals("http://www.ctqatest.biz/ecom/sale.html");
    browser.pause(3000);
  });

  //Filter the search with price range between $100.00 -$199.99 and validate the filter has been applied correctly
  it("Should click on filter with price range between $100.00 -$199.99", () => {
    salePage.clickOnFilterWithPrice();
    expect(browser.getUrl()).equals(
      "http://www.ctqatest.biz/ecom/sale.html?price=100-200"
    );
    browser.pause(3000);
  });
});
