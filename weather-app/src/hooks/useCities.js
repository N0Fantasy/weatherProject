import { useEffect, useReducer } from 'react';

const iniState = {
    inputValue: '',
    editingCity: '',
    cities: JSON.parse(localStorage.getItem('cities')) || [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newCities = state.cities.filter(city => city === action.payload).length !== 0
                ? [...state.cities]
                : [...state.cities, action.payload]
            return { ...state, cities: newCities }
        }
        case 'REMOVE_CITY': {
            const newCities = state.cities.filter(city => city !== action.payload)
            return { ...state, cities: newCities }
        }
        case 'EDIT_CITY': {
            return { ...state, inputValue: action.payload, editingCity: action.payload }
        }
        case 'EDIT_CITY_DONE': {
            const newCities = state.cities.filter(city => city !== state.editingCity && city !== action.payload)
            return {
                ...state,
                inputValue: iniState.inputValue,
                editingCity: iniState.editingCity,
                cities: [...newCities, action.payload]
            }
        }
        case 'CHANGE_INPUT': {
            return { ...state, inputValue: action.payload }
        }
        case 'CLEAR_INPUT': {
            return { ...state, inputValue: iniState.inputValue }
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

    return [state, dispatch]
}