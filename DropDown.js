describe('Protractor All Demo', function() {
    function Calc(a,b,c) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item) {
            item.getAttribute('value').then(function(value) {
               if(value==c) {
                   item.click();
               }
            })
        })
        element(by.id('gobutton')).click();
    }

    it('The All Operator', function() {

        browser.get('https://juliemr.github.io/protractor-demo/');
                          
    Calc(4 ,89,'MULTIPLICATION');
    Calc(7,29,'DIVISION');  
    Calc(899,19,'SUBTRACTION');
    Calc(666666666666667,9,'DIVISION');

    element.all(by.repeater('result in memory')).each(function(item) {
        item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
            console.log(text);
    })
    })

    })
})

    