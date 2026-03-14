import { Locator } from "@playwright/test";

class Example{
    usernameTF:Locator;
    passwordTF:Locator;
    submitBtn:Locator;

    
    constructor(page:any){
        this.usernameTF=page.locator("#username");
        this.passwordTF=page.locator("#password");
        this.submitBtn=page.locator("#submit");
        
    }

   
}

export default Example;
