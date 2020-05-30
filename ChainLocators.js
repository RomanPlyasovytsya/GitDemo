describe('Learning Chain Locators', function() {

    it('Repeater', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');

      element(by.model('first')).sendKeys('2020');
      element(by.model("operator")).element(by.css("option:nth-child(5)")).click();
      element(by.model('second')).sendKeys('1977');
      element(by.id('gobutton')).click();
      element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text) {
          console.log(text);
      })
    })	
  })