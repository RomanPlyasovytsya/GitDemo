describe('Learning Alerts', function() {

    it('open non-Angular web-site', function() {
      browser.waitForAngularEnabled(false);  
      browser.get('https://rahulshettyacademy.com/AutomationPractice/');

      element(by.id("confirmbtn")).click();

      browser.switchTo().alert().dismiss()
    })	
  })	