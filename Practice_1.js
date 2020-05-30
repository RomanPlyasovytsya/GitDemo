describe('Practice Set 1', function() {

    it('Fill in the registration form', function() {

      browser.get('https://rahulshettyacademy.com/angularpractice/');

      element(by.name('name')).sendKeys('Roman');
      element(by.name('email')).sendKeys('dancer@ukr.net');
      element(by.id('exampleInputPassword1')).sendKeys('123');
      element(by.id('exampleCheck1')).click();
      element(by.cssContainingText('[id="exampleFormControlSelect1"] option', 'Male')).click();
      element(by.id('inlineRadio2')).click();
      element(by.buttonText('Submit')).click().then(function(){
        element(by.css('div[class*="success"]')).getText().then(function(text){
          console.log(text);
        })
      
      element(by.name('name')).clear();
      element(by.name('name')).sendKeys('T').then(function(){
        element(by.css('[class="alert alert-danger"]')).getText().then(function(text){
          console.log(text);
        });
      })     
      
      });
    })	
  })	