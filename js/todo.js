console.log('hello world');

class todo {
    constructor(check, text) {
        // assign constructor values to class
        // check will be false at first
        // text will be blank: ""
        this.check = check,
        this.text = text
    }
}

function addTodo(check, text) {
    // get list element, create new items
    // add them to list
    var todo = new todo(check, text);
}

function submitForm() {
    // call this in the form submit (add) button
    // get form values, do stuff...
    addTodo(check, text);
}

function initialize() {
    // intialize the app (main app function)
    console.log('starting...');

    // set up any event listeners, and forms etc
    // for example, click listen for submit form
    // start by researching js forms

    // get submit button element by id
    var button = document.getElementById('submit');
    console.log(button);

};

initialize();