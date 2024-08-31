package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ListAccountPage {
	WebDriver driver;

	public ListAccountPage(WebDriver driver) {
		this.driver = driver;
	}
	@FindBy(how = How.XPATH, using = "//button[text()='Add Account']")
	WebElement AddAccountButton;
	@FindBy(how = How.XPATH, using = "//input[@id='account_name']")
	WebElement AccountName;
	@FindBy(how = How.XPATH, using = "//textarea[@id='description']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//button[text()='Save']")
	WebElement SaveButton;
	

	public void clickAddAccountButton() {
		AddAccountButton.click();
	}
	
	public void enterAccountName(String accountName) {
		AccountName.sendKeys(accountName);
	}
	public void enterDescription(String description) {
		Description.sendKeys(description);
	}
	public void enterInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
	}
	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}
	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
	}
	public void clickSaveButton() {
		SaveButton.click();
	}
	
	public String getAccountName() {
			String actualAccountName = driver.findElement(By.xpath("//tbody/tr[1]/td[2]")).getText();
		return actualAccountName;
	}
}

