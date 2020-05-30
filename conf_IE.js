exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["ElementBasics.js"],
  
capabilities: {
  'browserName': 'internet explorer'
}
};