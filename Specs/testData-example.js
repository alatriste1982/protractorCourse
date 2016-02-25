describe('angularjs homepage', function() {
  it('should greet the named user', function() {
  	var testData = require('../testData/testData.json');
    var angularHomepage =  require('../pageObjects/AngularHomepage.po');
    angularHomepage.get();

    angularHomepage.setName(testData.name);

    expect(angularHomepage.getGreeting()).toEqual('Hello ' + testData.name + '!');
  });
});
