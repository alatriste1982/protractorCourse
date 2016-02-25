describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage =  require('../pageObjects/AngularHomepage.po');
    angularHomepage.get();

    angularHomepage.setName('Pibe Valderrama');

    expect(angularHomepage.getGreeting()).toEqual('Hello Pibe Valderrama!');
  });
});
