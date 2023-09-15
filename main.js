const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArr) {
        this._field = fieldArr;
    }

    print() {
        for (let i = 0; i < this._field.length; i++) {
            console.log(this._field[i].join(''));
        }
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();