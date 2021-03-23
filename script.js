const pokemons = [
{
    nome: "Pikachu",
    img: "https://mestrepokemon.com/wp-content/uploads/2019/11/Pikachu-Pokedex-1024x576.jpg"
},
{
    nome: "Eevee",
    img: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Eevee-Pok%C3%A9dex-1024x683.jpg"
},
{
    nome: "bulbasaur",
    img: "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg"
},
{
    nome: "Lugia",
    img: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Lugia%E2%80%93-Pok%C3%A9dex-1024x758.jpg"
},
{
    nome: "Gengar",
    img: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Gengar-Pok%C3%A9dex-1024x534.jpg"
},
{
    nome: "Charizard",
    img: "https://mestrepokemon.com/wp-content/uploads/2019/11/Charizard-Pok%C3%A9dex-1024x576.png"
},
{
    nome: "Sceptile",
    img: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Sceptile-Pok%C3%A9dex.jpg"
},
{
    nome: "Garchomp",
    img: "https://mestrepokemon.com/wp-content/uploads/2020/03/Pok%C3%A9mon-Garchomp-Pok%C3%A9dex-1024x512.jpg"
}
];
const botao = document.getElementById('btn1');
const botao2 = document.getElementById('btn2')
const img = document.querySelector('img');

var numero = 0;

function carregar_pokemon(){
    numero = Math.floor(Math.random() * pokemons.length);

    img.setAttribute('src', pokemons[numero].img)
}

carregar_pokemon();


botao.onclick = () => {
    let resposta = document.querySelector('input').value;

    if(resposta.length){
        if(resposta.toLowerCase() == pokemons[numero].nome.toLowerCase()){
            alert('Resposta certa!')
        }else{
            alert('Resposta errada =(')
        }
    }else{
        alert('Insira o nome');
    }
}


botao2.onclick = carregar_pokemon;