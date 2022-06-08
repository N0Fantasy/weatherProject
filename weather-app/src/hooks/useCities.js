import { useState, useEffect } from 'react';

export const useCities = () => {
    const [cities, setCities] = useState(JSON.parse(localStorage.getItem('cities')) || []);
    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }, [cities])

    return [cities, setCities]
}