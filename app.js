
const fortunes = require('./fortunes.json')
const randomIndex = Math.floor(Math.random() * fortunes.length);
const getFortune = fortunes[randomIndex];
console.log(getFortune)

const express = require('express')
const app = express()
const port = 3000


const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts."
    },
    {
        id: 4,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta."
    },
    {
        id: 5,
        joke: "Why can’t your nose be 12 inches long?",
        punchline: "Because then it would be a foot."
    }
];
app.get('/site.js', (_, res) => {
    res.sendFile(__dirname + '/site.js');
});

app.get('/', (_, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/v1/random-joke', (_, response) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    response.json(jokes[randomIndex]);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
