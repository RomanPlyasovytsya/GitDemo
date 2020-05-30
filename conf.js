var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["ElementBasics.js"],

  onPrepare: function(){
//browser.waitForAngularEnabled(false);
browser.driver.manage().window().maximize();

jasmine.getEnv().addReporter(
  new Jasmine2HtmlReporter({
    savePath: 'target/screenshots'
  })
);
  },

  suites: {
    Smoke: 'ElementBasics.js',
    Regression: ['Objects.js', 'DropDown.js']
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};