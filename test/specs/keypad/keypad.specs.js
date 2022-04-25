const SplashScreen = require('../../pageobjects/page/splash/splash.screen');
const Keypad = require('../../pageobjects/page/keypad/keypad.screen');
const Utils = require('../../utils/common.utils');
const data = require('../../data/contacts/contacts.json');
describe('Go DirectVoice Keypad Page', async() => {
    before(async()=>{
        await Utils.doClick(SplashScreen.agreeContinue,10000)
        await driver.pause(25000)
    });
    it('Account Name Test', async()=>{
        const accName = await Utils.doGetText(Keypad.accName,10000)
        await expect(accName).toEqual(data.firstname)
    })
    it('Account Online Test', async()=>{
        const accStatus = await Utils.doGetText(Keypad.accStatus,12000)
        await expect(accStatus).toEqual("ONLINE")
    })
    it('Dial on Keypad Tst', async()=>{
        await Utils.doClick(Keypad.dialer_1,1000);
        await Utils.doClick(Keypad.dialer_2,1000);
        await Utils.doClick(Keypad.dialer_3,1000);
        const diale = await Utils.doGetText(Keypad.numberPlate);
        await expect(diale).toEqual(data.dialNumber)
    })
    
 
});