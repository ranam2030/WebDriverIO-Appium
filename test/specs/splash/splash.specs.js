const SplashScreen = require('../../pageobjects/page/splash/splash.screen');
const Utils = require('../../utils/common.utils');
const data = require('../../data/splash/splash.json');
describe('Splash Screen Test', async()=>{
    before(async()=>{
        await Utils.doClick(SplashScreen.agreeContinue,10000)
    });
    it('Router Name Test',async()=>{
        await driver.pause(3000)
        const routernmae = await SplashScreen.RouterName;
        for(let i=0;i<routernmae.length;i++){
            expect(await routernmae[i].getText()).toEqual(data.routerName[i])
        }
        await driver.pause(1000)
    })
    it('Skip Button Test',async()=>{
       await expect(SplashScreen.SkipBtn).toBeDisplayed()
    })
})