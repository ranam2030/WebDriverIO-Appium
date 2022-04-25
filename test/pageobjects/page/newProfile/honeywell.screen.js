class honeywell{
    get manufacturerLogo(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/manufacturer_logo"]');
    }
    get selectedCabinRouterName(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/text_cabin_router_name"]');
    }
    get selectCabinRouter(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/spinner_view_text"]');
    }
    get cnx_900(){
        return $('//android.widget.TextView[@text="CNX-900"]');
    }
    get cnx_800(){
        return $('//android.widget.TextView[@text="CNX-800"]');
    }
    get cnx_250(){
        return $('//android.widget.TextView[@text="CNX-250"]');
    }
    get cg_710_GoDirect(){
        return $('//android.widget.TextView[@text="CG-710 (GoDirect)"]');
    }
    get cg_710_Legacy(){
        return $('//android.widget.TextView[@text="CG-710 (Legacy)"]');
    }
    get ccu_200(){
        return $('//android.widget.TextView[@text="CCU-200"]');
    }
    get ccu_100(){
        return $('//android.widget.TextView[@text="CCU-100"]');
    }
    get aspire_100(){
        return $('//android.widget.TextView[@text="Aspire-100"]');
    }
    get gdr(){
        return $('//android.widget.TextView[@text="GDR"]');
    }
    get custom(){
        return $('//android.widget.TextView[@text="Custom"]');
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
    get doneBtn(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_profile_done"]');
    }
    
}
module.exports = new honeywell();

//*[@resource-id=""]
//android.widget.TextView[@text=""]