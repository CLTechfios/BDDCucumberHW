package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.ListAccountPage;
import pages.LoginPage;
import pages.TestBase;

public class AddAccountStepDefinition extends TestBase {
	LoginPage loginPage;
	DashboardPage dashboardPage;
	ListAccountPage listAccountPage;

	@Then("User enters {string} in the {string} field in accounts page")
	public void user_enters_in_the_field_in_accounts_page(String accountData, String fieldName) {
		listAccountPage = new ListAccountPage(driver);
		if (fieldName.equalsIgnoreCase("accountName")) {
			listAccountPage.enterAccountName(accountData);
		} else if (fieldName.equalsIgnoreCase("description")) {
			listAccountPage.enterDescription(accountData);
		} else if (fieldName.equalsIgnoreCase("initialBalance")) {
			listAccountPage.enterInitialBalance(accountData);
		} else if (fieldName.equalsIgnoreCase("accountNumber")) {
			listAccountPage.enterAccountNumber(accountData);
		} else if (fieldName.equalsIgnoreCase("contactPerson")) {
			listAccountPage.enterContactPerson(accountData);
		} else {
			System.out.println("Invalid Account Data: " + accountData + "in Field " + fieldName);
		}
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String expectedAccountName = "BarbieQQ";
		try {
		Thread.sleep(8000);
		} catch (InterruptedException e) {
		e.printStackTrace();
		}
		Assert.assertEquals("Account does not exist!!", expectedAccountName, listAccountPage.getAccountName());
	}
}
