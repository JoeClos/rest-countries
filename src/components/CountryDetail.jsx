import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import SelectedCountry from "./SelectedCountry";

const CountryDetail = () => {
    const{ countryName }= useParams({});
    console.log(countryName)
    const [selectedCountry, setSelectedCountry] = useState();
    const rootURL = "https://restcountries.com/v3/name/";

    useEffect(() => {
         axios
         .get(`${rootURL}/${countryName}`)
         .then((response) => {
            setSelectedCountry(response.data);
            console.log(setSelectedCountry)

         })
        
      }, [countryName]);

    return(
        <div>
            <SelectedCountry selectedCountry={selectedCountry}/>
            <Link to={`/`} >
            <ChevronLeft />
            </Link>
        </div>
    )
}

export default CountryDetail;