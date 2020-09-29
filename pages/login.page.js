class Login {
  get username() {
    // selected by id
    return $("input#email");
  }

  get password() {
    // selected by id
    return $("input#pass");
  }

  get errorMessage() {
    // selected by class
    return $(".error-msg span");
  }

  get credentialsRequiredMessage() {
    // selected by id
    return $("div#advice-required-entry-email");
  }

  enterUsername(text) {
    this.username.waitForDisplayed();
    this.username.setValue(text);
  }

  enterPassword(text) {
    this.password.waitForDisplayed();
    this.password.setValue(text);
  }
}

module.exports = new Login();
