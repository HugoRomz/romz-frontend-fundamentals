$(document).ready(function () {
    const pokemonName = document.querySelector('.pokemon__name');
    const pokemonName2 = document.querySelector('.pokemon__name_back');
    const pokemonNumber = document.querySelector('.pokemon__number');
    const pokemonImage = document.querySelector('.pokemon__image');
    const pokemonAbility = document.querySelector('.pokemon__ability');
    const pokemonType = document.querySelector('.pokemon__Type');
    const pokemonMoves = document.querySelector('.pokemon__Moves');

    const form = document.querySelector('.form');
    const input = document.querySelector('.input__search');

    const buttonPrev = document.querySelector('.btn-prev');
    const buttonNext = document.querySelector('.btn-next');

    let searchPokemon = 1;

    const fetchPokemon = async (pokemon) => {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (APIResponse.status === 200) {
            const data = await APIResponse.json();
            return data;
        }
    }

    const RPokemon = async (pokemon) => {

        pokemonName.innerHTML = 'Cargando....';

        const data = await fetchPokemon(pokemon);

        if (data) {
            pokemonImage.style.display = 'block';
            pokemonName.innerHTML = data.name;
            pokemonMoves.innerHTML = data.moves[0].move.name.toUpperCase();
            pokemonName2.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            pokemonNumber.innerHTML = data.id + '.-'
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            input.value = '';
            searchPokemon = data.id;
            pokemonType.innerHTML = data.types[0].type.name.toUpperCase();
            pokemonAbility.innerHTML=data.abilities[1].ability.name.toUpperCase();
            
        } else {
            pokemonName.innerHTML = 'Not Found'
            pokemonNumber.innerHTML = '';
            pokemonImage.style.display = 'none';
        }

    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value !=='') {
             RPokemon(input.value.toLowerCase());
        }else{
            RPokemon('1');
        }
       
    });

    buttonPrev.addEventListener('click', () => {
        if (searchPokemon > 1) {
          searchPokemon -= 1;
          RPokemon(searchPokemon);
        }
      });
      
      buttonNext.addEventListener('click', () => {
        searchPokemon += 1;
        RPokemon(searchPokemon);
      });

    RPokemon(searchPokemon);


});