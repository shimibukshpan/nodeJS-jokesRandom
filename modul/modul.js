let oneLinerJoke = require('one-liner-joke');


let randomJokeByRandomNumber = oneLinerJoke.randomNumber();
let jokes = [];
console.log(randomJokeByRandomNumber);
while (randomJokeByRandomNumber > 0){
    let getJoke = oneLinerJoke.getRandomJoke();
    jokes.push(getJoke);
    randomJokeByRandomNumber = randomJokeByRandomNumber -1;
};
console.log(jokes);
jokes = [];