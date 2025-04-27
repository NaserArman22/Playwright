import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { generateRandomNumber } from "../Utils/utils.js"


test( 'Registration Form Automation' , async ( {page} ) => { 

    await page.goto("https://automationexercise.com/");

    await page.getByRole("link",{name : " Signup / Login"}).click();
    await page.getByRole("textbox",{name : "Name"}).fill(faker.person.firstName());
    
    //await page.getByRole("textbox",{name : "Email Address"}).fill(faker.internet.email());
    const emailTxt = page.locator("input[data-qa='signup-email']");
    await emailTxt.fill(faker.internet.email());
    await page.getByRole("button",{name : "Signup"}).click();
    await page.getByRole("radio",{name : "Mr."}).click();
    //await page.getByRole("textbox",{name : "Name"}).fill(faker.person.firstName());
    await page.getByRole("textbox",{name : "Password"}).fill(faker.person.firstName());
    await page.getByRole("combobox").nth(0).selectOption("12");
    await page.getByRole("combobox").nth(1).selectOption("December");
    await page.getByRole("combobox").nth(2).selectOption(  "2002" );
    await page.getByRole("textbox",{name : "First name *"}).fill(faker.person.firstName());
    await page.getByRole("textbox",{name : "Last name *"}).fill(faker.person.lastName());
    await page.getByRole("textbox",{name : "Address * (Street address, P.O. Box, Company name, etc.)"}).fill("abcddddde");
    await page.getByRole("combobox",{name :"Country *"}).selectOption( "Australia"  );
    await page.getByRole("textbox",{name : "State *"}).fill("abcddddde");
    await page.getByRole("textbox",{name : "City * Zipcode *"}).fill("abcddddde");
    await page.locator('input[data-qa="zipcode"]').fill("1219");

    await page.getByRole("textbox",{name: "Mobile Number *"}).fill( "018" + generateRandomNumber(1000000,9999999) );
    await page.getByRole("button",{name : "Create Account"}).click();
    await page.pause()

    let confirmMsg =  page.locator("p").first();
    expect(confirmMsg).toHaveText("Congratulations! Your new account has been successfully created!");
    await page.getByRole("link",{name : " Signup / Login"}).click();

    await page.evaluate(
      () => {
   window.scrollBy(0, 500);
   }
  );
    await page.getByRole("link",{name : " View Product"}).click();
    await page.locator('#quantity').fill("3");
    let confirmMsg2 =  page.locator("p").first();
    expect(confirmMsg2).toHaveText("Your product has been added to cart.");
    await page.getByRole("link",{name : " Cart"}).click();

    await page.evaluate(
      () => {
   window.scrollBy(0, 500);
   }
  );
   

  await page.locator("tbody tr").first().waitFor({ timeout: 50000 }); 
  const firstRow = await page.locator("tbody tr").first();
  let confirmMsg3 =  page.locator("p").first();
    expect(confirmMsg3).toHaveText("1500");


    


  
    
   
      



 await page.pause()




})