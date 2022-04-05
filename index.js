import input from './lib/readInput.js';
import random from './lib/random.js';
import Chalk from 'chalk';
var playerName, continueToPlay;
var answer, guess;
const maximum = 30;
console.clear();
console.log('Welcome to the Random Number Game. \n');
playerName = input('What\'s your name? ');
if (!playerName || !playerName.length)
    playerName = 'Player';
guess = random(maximum);
while (true) {
    answer = Number(input(`What\'s your guess (between 0 and ${maximum})? `));
    if (guess === answer && guess <= maximum) {
        console.clear();
        console.log(Chalk.green(`That\'s correct! Well done, ${playerName}! `));
        continueToPlay = input(`Do you want to play again (${Chalk.green('y')}/${Chalk.red('n')}), default is ${Chalk.gray('y')}? `);
        continueToPlay = continueToPlay[0];
        if (continueToPlay !== 'y' && continueToPlay !== 'n')
            continueToPlay = 'y';
        if (continueToPlay === 'y' || continueToPlay === 'Y') {
            console.clear();
            guess = random(maximum);
            continue;
        }
        else if (continueToPlay === 'n' || continueToPlay === 'N')
            process.exit(0);
    }
    else if (guess > maximum) {
        console.log(Chalk.cyan(`
            You specified a number greater than ${maximum}. 
            Don't do that. Try again.
            `));
    }
    else if (guess < 0) {
        console.log(Chalk.magenta(`
            You specified a number smaller than 0. 
            Don't do that. Try again.
            `));
    }
    else if (guess <= maximum) {
        console.clear();
        console.log(Chalk.red(`That\'s wrong! Try again, ${playerName}! `));
        continue;
    }
}
