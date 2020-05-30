describe('Protractor All Demo', function() {
    function Add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    it('The All Operator', function() {

        browser.get('https://juliemr.github.io/protractor-demo/');

        Add(4,6);
        Add(8,17);
        Add(24,1);
        Add(16,5);

           
        element.all(by.repeater('result in memory')).each(function(item) {
            item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
                console.log(text);
        })
        })
    })
})
