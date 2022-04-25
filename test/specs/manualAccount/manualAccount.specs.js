const SplashScreen = require('../../pageobjects/page/splash/splash.screen');
const ManualAccountConf = require('../../pageobjects/page/manualAccountConf/manualAccountConf.screen');
const NewAccount = require('../../pageobjects/page/newAccount/newAccount.screen');
const GenericAccount = require('../../pageobjects/page/newProfile/generic.screen');
const Utils = require('../../utils/common.utils');
const profile = require('../../pageobjects/page/profiles/profiles.screen');
describe('Go DirectVoice Keypad Page', async() => {
    before(async()=>{
        await Utils.doClick(SplashScreen.agreeContinue,10000)
        await driver.pause(200)
    });

    it('Skip Button Test', async () =>{
        await driver.pause(500);
        await Utils.doClick(SplashScreen.SkipBtn,1000)
    })
    it('Offline page', async ()=>{
        //await ManualAccountConf.offlineBtn.then(OFFLINEBTN => OFFLINEBTN.click()).catch(err => err)
        await Utils.doClick(ManualAccountConf.offlineBtn,100)
        //await ManualAccountConf.proceedBtn.then(PROCEEDBTN => PROCEEDBTN.click()).catch(err => err)
        await Utils.doClick(ManualAccountConf.proceedBtn,100)
        await driver.pause(1500);
    })
    it('Manual Generic account config', async()=>{
        //await NewAccount.selectManufacturer.then(MANUFACTURERSELECTION => MANUFACTURERSELECTION.click()).catch(err => err)
        await Utils.doClick(NewAccount.selectManufacturer,10000)
        //await NewAccount.genericAccount.then(GENERICACC => GENERICACC.click()).catch(err => err)
        await Utils.doClick(NewAccount.genericAccount,10000)
        //await GenericAccount.extension.then(EXTENSION => EXTENSION.addValue("212")).catch(err => err)
        await Utils.doAddValue(GenericAccount.extension,"212",12000)
        //await GenericAccount.password.then(PASSWORD => PASSWORD.addValue("1234")).catch(err => err)
        await Utils.doAddValue(GenericAccount.password,"1234",1200)
        //await GenericAccount.domain.then(DOMAIN => DOMAIN.addValue("202.191.126.148")).catch(err => err)
        await Utils.doAddValue(GenericAccount.domain,"202.191.126.148")
        //await GenericAccount.doneBtn.then(DONE => DONE.click()).catch(err => err)
        await Utils.doClick(GenericAccount.doneBtn,100)
        await Utils.dowaitUntil(profile.accountStatus,"Registered",25000)
        const st = await Utils.doGetText(profile.accountStatus,1200)
        console.log("Account Status : : ",st)
        await driver.pause(3500);
    })
 
});