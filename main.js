const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.locationX = 0;
        this.locationY = 0;
        // Set the "home" position before the game starts
        this.field[0][0] = pathCharacter;
    }

    runGame() {
        let playing = true;
        while (playing) {
            this.print();
            this.askQuestion();
            if (!this.isInBounds()) {
                console.log('Out of bounds instruction!');
                playing = false;
                break;
            } else if (this.isHole()) {
                console.log('Sorry, you fell down a hole!');
                playing = false;
                break;
            } else if (this.isHat()) {
                console.log('Congrats, you found your hat!');
                playing = false;
                break;
            }
            // Update the current location on the map
            this.field[this.locationY][this.locationX] = pathCharacter;
        }
    }

    askQuestion() {
        const answer = prompt('Which way? ').toUpperCase();
        switch (answer) {
            case 'W':
                this.locationY -= 1;
                break;
            case 'S':
                this.locationY += 1;
                break;
            case 'A':
                this.locationX -= 1;
                break;
            case 'D':
                this.locationX += 1;
                break;
            default:
                console.log('Enter W, A, S or D.');
                this.askQuestion();
                break;
        }
    }

    isInBounds() {
        return (
            this.locationY >= 0 &&
            this.locationX >= 0 &&
            this.locationY < this.field.length &&
            this.locationX < this.field[0].length
        );
    }

    isHat() {
        return this.field[this.locationY][this.locationX] === hat;
    }

    isHole() {
        return this.field[this.locationY][this.locationX] === hole;
    }

    print() {
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();