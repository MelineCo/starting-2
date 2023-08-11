const prompt = require('prompt-sync')({sigint: true});

//const way = prompt('What way?');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this.field = field;
        this.userVerticalPosition = 1;
        this.userHorizontalPosition = 1;
    };

    print() {
        const arrayLength = this.field.length;
        for(let i = 0; i < arrayLength; i++){
            const line = this.field[i];
            console.log(line.join(''));
        };
    };

    isOnTheHat(){

    };
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();

