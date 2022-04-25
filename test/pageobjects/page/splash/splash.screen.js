//const Agree_Continue = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_agree_and_continue"]'
const SKIP_BTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/skip"]'
const ROUTERNAME = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/routerDomain"]'
class SplashScreen {
    get agreeContinue() {
        //$(Agree_Continue).waitForDisplayed({timeout: 5000});
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_agree_and_continue"]');
    }
    get SkipBtn() {
        //$(SKIP_BTN).waitForDisplayed({timeout: 5000});
        return $(SKIP_BTN);
    }
    get RouterName(){
       //$(ROUTERNAME).waitForDisplayed({timeout: 5000});
       return $$(ROUTERNAME);
    }
    async agree() {
        await (await this.agreeContinue).click();
    }
}
module.exports = new SplashScreen();
//export default new SplashScreen();