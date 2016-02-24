exports.config = {
	//Si seleniumAddress no está seteado protractor lo inicializa
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Specs/multiple-tests.js']
};