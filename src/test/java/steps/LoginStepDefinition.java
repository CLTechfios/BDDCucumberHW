package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.ListAccountPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;
	
	DashboardPage dashboardPage;
	ListAccountPage listAccountPage;
	

	@Before
	public void beforeRun () {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		listAccountPage = PageFactory.initElements(driver, ListAccountPage.class);
		
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	@Given("User is on the codefios login page")
	public void user_is_on_the_codefios_login_page() {
		driver.get("https://codefios.com/ebilling/");
	
	}
	
	
	@When("User enters the {string} in the {string} field")
	public void user_enters_the_in_the_field(String loginData, String fieldName) {
		if(fieldName.equalsIgnoreCase("username")) {
			loginPage.enterUserName(loginData);
		} else if (fieldName.equalsIgnoreCase("password")){
			loginPage.enterPassword(loginData);
		} else {
			System.out.println("Invalid Login Data: " + loginData + "in Field " + fieldName);
		}
	}

	
	@Then("User clicks on {string}")
	public void user_clicks_on(String button) {
		if(button.equalsIgnoreCase("login")) {
			loginPage.clickSignInButton();
		} else if (button.equalsIgnoreCase("listAccounts")) {
			dashboardPage.clickListAccounts();
		} else if (button.equalsIgnoreCase("addAccount")) {
			listAccountPage.clickAddAccountButton();
		} else if (button.equalsIgnoreCase("save")) {
			listAccountPage.clickSaveButton();
		}
	}
	
	@Then("User should land on Dashboard page")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Codefios";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}
	


}
