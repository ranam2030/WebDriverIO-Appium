class commonutils {   
    async doClick(element,timeout){
        await element.waitForDisplayed({timeout});
        await element.click();
    }
    async doGetText(element,timeout){
        await element.waitForDisplayed({timeout});
        return element.getText();
    }
    async doAddValue(element,value,timeout){
        await element.waitForDisplayed({timeout});
        await element.addValue(value);
    }
    async dowaitUntil(element,text,timeout){
        driver.waitUntil(
            function(){
                return element.getText() === text;
            },
            {timeout: timeout}
        );
    }
    
}
module.exports = new commonutils();