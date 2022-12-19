import axios from 'axios';
import { useState, useEffect } from 'react';


const FrontPage = () => {

    const [ countries, setCountries ] = useState();

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';

        axios.get(url)
        .then((response) => {
            setCountries(response.data);
            console.log(response.data)
        })
        .catch((error) => console.error(error))

    }, [])

    return(
        <div>
            {countries && countries.map((country) => (
                <>
                    <img src={country.flags.png} alt="country"/>
                    <p key={country.altSpellings}>{country.name.common}</p>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                    {/* {country.languages.map((lang) => (
                        <ul>
                            <li key={lang}>{lang}</li>
                        </ul>
                    ))} */}
                </>
            ))}
        </div>
    )
}

export default FrontPage;