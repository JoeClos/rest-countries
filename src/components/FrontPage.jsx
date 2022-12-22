import axios from "axios";
import { React, useState, useEffect } from "react";
import { TableContainer, TableRow, TableHead, TableCell, TableBody } from "@mui/material";
import Table from "@mui/material/Table";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchAppBar from "./SearchAppBar";

const FrontPage = (props) => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((response) => {
        setCountries(response.data);
        console.log(response.data.length);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <SearchAppBar />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Flag</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Region</TableCell>
              <TableCell align="left">Population</TableCell>
              <TableCell align="left">Languages</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {countries &&
              countries.map((country, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={country.index}
                  tabIndex={-1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={country.flags.png} alt="country" />
                  </TableCell>
                  <TableCell align="left">{country.name.common}</TableCell>
                  <TableCell align="left">{country.region}</TableCell>
                  <TableCell align="left">{new Intl.NumberFormat().format(country.population)}</TableCell>
                  <TableCell align="left">
                    {Object.values(country.languages || []).map(
                      (lan, index) => (
                        <ul key={country.languages.index}>
                          <li>{lan}</li>
                        </ul>
                      )
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/country/${country.name.common}`}>
                      <ChevronRight />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FrontPage;
