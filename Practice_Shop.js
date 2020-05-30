describe('Practice Set 1', function() {

    function selectItem(product){
        element.all(by.tagName("app-card")).each(function(item){
        item.element(by.css('h4 a')).getText().then(function(text){
            if (text=='Blackberry'){
                item.element(by.css('button[class*="btn btn-info"]')).click();                 
            }
        })
    })
    }

    it('Go to shop and select products', function() {

      browser.get('https://rahulshettyacademy.com/angularpractice/');

      element(by.name('name')).sendKeys('Roman');
      element(by.name('email')).sendKeys('dancer@ukr.net');
      element(by.id('exampleInputPassword1')).sendKeys('123');
      element(by.id('exampleCheck1')).click();
      element(by.cssContainingText('[id="exampleFormControlSelect1"] option', 'Male')).click();
      element(by.id('inlineRadio2')).click();
      element(by.buttonText('Submit')).click();

      element(by.linkText('Shop')).click();
      selectItem('iphone X');
      selectItem('Samsung Note 8');
      selectItem('Nokia Edge');

      element(by.partialLinkText('Checkout')).getText().then(function(text){
          var result = text.split('(');
          expect(result[1].trim().charAt(0)).toBe('3');
      }) 
      });
    })	