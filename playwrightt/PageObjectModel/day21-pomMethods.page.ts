import { Locator } from "@playwright/test";

class pomMethods{
    usernameTF:Locator;
    passwordTF:Locator;
    submitBtn:Locator;

    
    constructor(page:any){
        this.usernameTF=page.locator("#username");
        this.passwordTF=page.locator("#password");
        this.submitBtn=page.locator("#submit");
        
    }

    async login(username: string, pwd: string){
        await this.usernameTF.fill(username);
        await this.passwordTF.fill(pwd);
        await this.submitBtn.click();
    }

   
}

export default pomMethods;
