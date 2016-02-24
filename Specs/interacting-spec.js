//todo-spec.js
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');
    //Adds an item to Todo list
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));//gets every item on Todo list
    expect(todoList.count()).toEqual(3);//Verifies the number of items on the list
    expect(todoList.get(2).getText()).toEqual('write first protractor test'); //Verifies the name of the added item

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();//marks the added item as done
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);//Checks the done tasks number matches the expected value
  });
});