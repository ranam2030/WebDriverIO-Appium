class SplashScreen {
    get accountStatus() {
        //$(Agree_Continue).waitForDisplayed({timeout: 5000});
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/status_data"]');
    }
    get accountExtension() {
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/extension_data"]');
    }
    get accountDomain() {
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/domain_data"]');
    }
    get manufacturerLogo() {
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/manufacturer_logo"]');
    }
    get routerName() {
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_cabin_router_name"]');
    }
    get toggolSwitch() {
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/switch_enabled"]');
    }
}
module.exports = new SplashScreen();