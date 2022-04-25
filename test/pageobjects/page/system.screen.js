// await const password = await $('//android.widget.EditText[@hint="Password"]');
// await const username = await $('//android.widget.EditText[@hint="Username or Email Address"]');
// await const loginButton = await $('//android.widget.Button[@text="LOG IN"]');
// await const back = await $('//android.widget.Button[@text="back"]');
// await const loginErrorToast = await $('//android.widget.TextView[@text="Please input username and password."]');
// await const menu = await $('//android.widget.Button[@text="menu"]');
// await const login = await $('//android.widget.TextView[@text="LOG IN"]');

class common {
    get navigateBack(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }
    get contactsPage(){
        return $('//android.widget.TextView[@text="CONTACTS"]');
    }
}
module.exports = new common();




