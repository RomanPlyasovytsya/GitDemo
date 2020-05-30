describe('Protractor Element Demo', function() {

  var getFrom = require('./SourceCode.js');
  var using = require("jasmine-data-provider")
  var data = require('./data.js');

  beforeEach(function() {
    getFrom.getURL()
  });

  using(data.dataDriven, function (data, description) {

    it('Adding ' + description, function() {

      getFrom.firstInput.sendKeys(data.firstInput);
      getFrom.secondInput.sendKeys(data.secondInput);
      getFrom.goButton.click();
    
      expect(getFrom.result.getText()).toBe(data.result);
      getFrom.result.getText().then(function(text){
        console.log(text);
      })
    })	 
  })	
  afterEach(function() {
    console.log('Test completed.')
  })
})

    