const SplashScreen = require('../../pageobjects/page/splash/splash.screen');
const System = require('../../pageobjects/page/system.screen');
//const config = require("../../../config");
describe('Go DirectVoice Contacts Page', () => {
    before(async()=>{
        await driver.pause(1500);
        await SplashScreen.agreeContinue.then(AGREEANDCONTINUE => AGREEANDCONTINUE.click()).catch(err => err)
        await driver.pause(20000);
        
    });
    
    it('Go to Contact Page', async () => {
       await System.contactsPage.then(CONTACTPAGE => CONTACTPAGE.click()).catch(err => err)
    })

    it('Scroll to Bsk', async () =>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bsk")').then(CL => CL.click()).catch(err => err);
        await driver.pause(1500);
        //3100623
       
    })
 
});