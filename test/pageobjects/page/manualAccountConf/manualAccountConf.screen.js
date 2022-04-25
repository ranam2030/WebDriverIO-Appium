const HONEYWELLLOGO = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/logo_h"]'
const ONLINEBTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_online_account"]'
const OFFLINEBTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_offline_account"]'
const PROCEEDBTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_login"]'
const USERNAMETEXT = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/label_username"]'
const INPUTUSERNAME = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/input_username"]'
const PASSWORDTEXT = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/label_password"]'
const INPUTPASSWORD = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/input_password"]'
const LOGINBTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_login"]'
const FORGOTPASSWORDBTN = '//*[@resource-id="com.honeywell.aero.godirectvoice:id/forget_password"]'

class HoneywellScreen{

    get honeywellLogo(){ // Logo
        
        return $(HONEYWELLLOGO);
    }
    get onlineBtn(){ //Button for online page
        return $(ONLINEBTN);
    }
    get offlineBtn(){ //Button for offline page
        return $(OFFLINEBTN);
    }
    get proceedBtn(){ //Proceed Button for offile account
        return $(PROCEEDBTN);
    }
    get usernameText(){
        return $(USERNAMETEXT);
    }
    get inputUsername(){
        return $(INPUTUSERNAME);
    }
    get passwordText(){
        return $(PASSWORDTEXT);
    }
    get inputPassword(){
        return $(INPUTPASSWORD);
    }
    get loginBtn(){
        return $(LOGINBTN);
    }
    get forgotPasswordBtn(){
        return $(FORGOTPASSWORDBTN);
    }

}
module.exports = new HoneywellScreen();