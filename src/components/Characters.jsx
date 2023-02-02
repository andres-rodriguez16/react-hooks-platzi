
import React, { useState, useEffect, useReducer, useMemo } from 'react'
import s from './Characters.module.css'

// estado en donde se va guardar la informacion 
const initialState = {
	favorites: []
}

// reducer es igual a como se manejaba con redux 
const favoriteReducer = (state, action) => {
	if (action.type === 'ADD_TO_FAVORITE') {
		const validation = state.favorites.find((favorite) => action.payload.id === favorite.id)
		if (!validation) {
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			}
		}
	}
	return state
}

const Characters = () => {
	const [characters, serCharacters] = useState([])
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
 
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then(r => r.json())
			.then(data => serCharacters(data.results))
	}, [])


	const handleClick = (favorite) => {
		dispatch({
			type: 'ADD_TO_FAVORITE',
			payload: favorite
		})
	}
	return (
		<>
			{favorites.favorites.map(character => (
				<div key={character.id}>{character.name} </div>
			))}

			<div className={s.character__container}>
				{characters.map(character => (
					<div key={character.id} className={s.character}>
						<img className={s.character__image} src={character.image} alt={character.name} />
						<p> {character.status} </p>
						<p>{character.name}</p>
						<p> {character.species}</p>
						<p> {character.location.name}</p>
						<button type='button' onClick={() => handleClick(character)}>Agregar a favoritos</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Characters