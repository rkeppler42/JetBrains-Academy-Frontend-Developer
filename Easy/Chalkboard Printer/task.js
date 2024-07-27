const input = require('sync-input');
    let name, surname, message;
    name = input("Enter name: ");
    surname = input("Enter surname: ");
    message = input("Enter message: ");
    numberOfRepeats = parseInt(input("Enter number of repeats: "));
    for (numberOfRepeats; numberOfRepeats > 0; numberOfRepeats--) {
        console.log(`This is ${name} ${surname} and ${message}`);
    }