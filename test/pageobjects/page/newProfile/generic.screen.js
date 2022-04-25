
class generic{
    get manufacturerLogo(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/manufacturer_logo"]');
    }
    get profileName(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_profile_name"]');
    }
    get extension(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_profile_extension"]');
    }
    get password(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_profile_password"]');
    }
    get domain(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_profile_domain"]');
    }
    get sipProtocol(){
        return $('//android.widget.TextView[@text="SIP"]');
    }
    get iaxProtocol(){
        return $('//android.widget.TextView[@text="IAX"]');
    }
    get doneBtn(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_profile_done"]');
    }
}
module.exports = new generic();