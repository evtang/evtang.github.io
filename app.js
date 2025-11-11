
const fortunes = require('./fortunes.json')
const randomIndex = Math.floor(Math.random() * fortunes.length);
const getFortune = fortunes[randomIndex];
console.log(getFortune)

