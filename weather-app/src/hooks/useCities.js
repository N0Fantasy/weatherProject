import { useEffect, useReducer } from 'react';

const iniState = {
    cities: JSON.parse(localStorage.getItem('cities')) || [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CITY': {
            const newCities = [...state.cities, action.payload]
            return {...state, cities: newCities}
        }
        case 'REMOVE_CITY': {
            const newCities = state.cities.filter(city => city !== action.payload)
            return {...state, cities: newCities}
        }
        default: 
            return iniState
    }
}

export const useCities = () => {
    const [state, dispatch] = useReducer(reducer, iniState)
    const { cities } = state
    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities))
    }, [cities])

    return [cities, dispatch]
}