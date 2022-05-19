const array = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


let container = document.querySelector(".container");
let scatola;
let icona;

function generaScatole(array) {
    container.innerHTML = ""
    for (let i = 0; i < array.length; i++) {

    
        scatola = document.createElement("div");
        scatola.classList.add("scatola");
        container.append(scatola);
     
		
        
        let nomiElementi = array[i];
        
        icona = document.createElement("i");
        
        
        icona.classList.add(array[i].family);
        icona.classList.add(array[i].prefix + array[i].name);
        icona.classList.add(array[i].color);
        scatola.append(icona);
        
        let text = document.createElement("h3");
        scatola.append(text);
        text.innerText = nomiElementi.name;
    };
    
}

generaScatole(array);






const selector = document.getElementById("filtro-carte");

selector.addEventListener("change",
function (){
    let selection = selector.value;
    if (selection == "animals") {
        const animals = array.filter((elementAnimali) => elementAnimali.type === "animal");
        generaScatole(animals);
    }
    else if (selection == "vegetables") {
        const vegetables = array.filter((elementVegetali) => elementVegetali.type === "vegetable");
        generaScatole(vegetables);
    }
    else if (selection == "users") {
        const users = array.filter((elementUsers) => elementUsers.type === "user");
        generaScatole(users);
    }
    else {
        generaScatole(array);
    }
}
);
