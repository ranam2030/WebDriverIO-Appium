class newAccount {
    get newAccountPage(){
        return $('//android.widget.TextView[@text="New Account"]');
    }

    get manufacturerSelection(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/label_manufacturer_selection"]');
    }
    get selectManufacturer(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/spinner_view_text"]');
    }
    get spinnerArrow(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/spinner_view_arrow"]');
    }
    get honeywellAccount(){
        return $('//android.widget.TextView[@text="Honeywell"]');
    }
    get iridiumAccount(){
        return $('//android.widget.TextView[@text="Iridium"]');
    }
    get cobhamAccount(){
        return $('//android.widget.TextView[@text="Cobham"]');
    }
    get gogoAccount(){
        return $('//android.widget.TextView[@text="Gogo"]');
    }
    get satcomDirectAccount(){
        return $('//android.widget.TextView[@text="Satcom Direct"]');
    }
    get trueNorthAccount(){
        return $('//android.widget.TextView[@text="TrueNorth"]');
    }
    get genericAccount(){
        return $('//android.widget.TextView[@text="Generic"]');
    }
}
module.exports = new newAccount();