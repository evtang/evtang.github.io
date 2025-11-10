const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector("#welcome")

if(isMorning){
    welcome.textContent = "Good Morning!"
}
else if(isAfternoon){
    welcome.textContent = "Good Afternoon!"
}
else if(isEvening){
    welcome.textContent = "Good Evening!"
}

const key = "It's a secret to everybody."
localStorage.setItem( key, "The One Piece is Real")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

prev.addEventListener('click', () => {   
    currentImage--
    showImages()
   }
)

next.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage--
    showImages()
}, 5000)


const input = document.querySelector('#new-todo')
const addButton = document.querySelector('#add-button')
const todoList = document.querySelector('.todo-list')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text
        todoList.append(li);
    })
}

addButton.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false });
    localStorage.setItem('.todo-list', JSON.stringify(todos));
    renderTodos();
})



const getRandomPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 150) + 1);
  const result = await fetch(url);
  const pokemon = await result.json();
  renderPokemon(pokemon);
};

const renderPokemon = (pokemonData) => {
  const parentElement = document.querySelector('.pokemon-picker');
  parentElement.innerHTML = '';

  const img = document.createElement('img');
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
  img.alt = pokemonData.name;
  parentElement.append(img);
};

getRandomPokemon();