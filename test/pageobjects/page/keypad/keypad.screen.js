class keypad{
    get accName(){
        return $('//android.widget.TextView[@text="GDR"]');
    }
    get accStatus(){
        return $('//android.widget.TextView[@text="ONLINE"]');
    }
    get dialer_1(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_1"]');
    }
    get dialer_2(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_2"]');
    }
    get dialer_3(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_3"]');
    }
    get dialer_4(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_4"]');
    }
    get dialer_5(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_5"]');
    }
    get dialer_6(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_6"]');
    }
    get dialer_7(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_7"]');
    }
    get dialer_8(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_8"]');
    }
    get dialer_9(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_9"]');
    }
    get dialer_0(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_0"]');
    }
    get dialer_star(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_star"]');
    }
    get dialer_hash(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_text_asterisk"]');
    }
    get addContactsBtn(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/contact_add"]');
    }
    get dialerBtn(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/dialer_call_button"]');
    }
    get clearBtn(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/button_del"]');
    }
    get numberPlate(){
        return $('//*[@resource-id="com.honeywell.aero.godirectvoice:id/number_plate_edit_text"]');
    }
    
    async getAccountName(){
        return (await this.accName).getText();
    }
}
module.exports = new keypad();