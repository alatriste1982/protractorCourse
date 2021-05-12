exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Specs/multiple-tests.js'],
  capabilities: {
    browserName: 'firefox',
    //https://github.com/angular/angular.js/issues/17117
    'moz:firefoxOptions': {
      prefs: {'privacy.window.name.update.enabled': false}
    }
  }
};