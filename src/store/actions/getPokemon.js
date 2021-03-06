import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';
const apiImage = 'http://pokestadium.com/sprites/xy/';
const pokemons = [];
const pokemonConfig = [];


export function getPokemon(pokemon, image) {
  return {
    type: 'GET_POKEMON',
    pokemon,
    image,
  };
}

export function getPokemonError(error) {
  return {
    type: 'GET_POKEMON_ERROR',
    error,
  };
}

export function pokemonPagination(limit) {
  return {
    type: 'SHOW_PAGINATION',
    limit,
  };
}

export function updatePokemonPagination(limit) {
  return (dispatch) => {
    console.log('estou funcionando');
    dispatch(pokemonPagination(limit));
  };
}


export function responsePokemonData(response, dispatch) {
  const data = response.data.results;
  data.map(pokemon => pokemons.push(pokemon.url));
  pokemons.forEach((pokemon) => {
    axios.get(pokemon)
      .then((res) => {
        const abi = res.data;
        pokemonConfig.push(abi);
        pokemonConfig.sort((a, b) => a.id - b.id);
        dispatch(getPokemon(pokemonConfig, apiImage));
      }).catch((error) => {
        dispatch(getPokemonError(error));
      });
  });
}

export const getAllPokemons = (offSet, limitNumber) => async (dispatch) => {
  function onSuccess(success) {
    return success;
  }
  function onError(error) {
    return error;
  }
  try {
    // await axios.get(`${apiServe}?offset=${offSet}&limit=${limitNumber}`)
    const success = await axios({
      method: 'get',
      url: `${apiServe}?offset=${offSet}&limit=${limitNumber}`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((response) => {
        console.log(response)
        responsePokemonData(response, dispatch);
      }).catch((error) => {
        dispatch(getPokemonError(error));
      });
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};
