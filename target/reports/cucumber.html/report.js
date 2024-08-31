$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddAccount.feature");
formatter.feature({
  "name": "Codefios Other Add New Account validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should  be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountScenario"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountName",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "BarbieQQ",
        "This is BarbieQue",
        "880088",
        "808",
        "Sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should  be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@AddAccountScenario"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo@codefios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"BarbieQQ\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"This is BarbieQue\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"880088\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"808\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Sauce\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});