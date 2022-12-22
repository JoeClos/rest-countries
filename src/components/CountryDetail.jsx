import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";
import { React, useState, useEffect } from "react";
import axios from "axios";
import SelectedCountry from "./SelectedCountry";
import { Button } from "@mui/material";

const CountryDetail = () => {
  const { countryName } = useParams({});
  const [selectedCountry, setSelectedCountry] = useState();
  const rootURL = "https://restcountries.com/v3/name/";

  useEffect(() => {
    axios.get(`${rootURL}/${countryName}`).then((response) => {
      setSelectedCountry(response.data);
    });
  }, [countryName]);

  return (
    <div>
      <SelectedCountry selectedCountry={selectedCountry} />
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <div className="btn-country-card">
          <Button variant="contained" startIcon={<ChevronLeft />}>
            Back to list
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default CountryDetail;
