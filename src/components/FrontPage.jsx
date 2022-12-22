import axios from "axios";
import { React, useState, useEffect } from "react";
import {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";
import Table from "@mui/material/Table";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchAppBar from "./SearchAppBar";
import Pagination from "./Pagination";

const FrontPage = (props) => {
  const [countries, setCountries] = useState([]);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(countries.length / recordsPerPage);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((response) => {
        setCountries(response.data);
        console.log(response.data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <SearchAppBar countries={countries} setCountries={setCountries} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Flag</b></TableCell>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Name</b></TableCell>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Region</b></TableCell>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Population</b></TableCell>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Languages</b></TableCell>
              <TableCell align="left" sx={{fontSize: "1.2rem"}}><b>Details</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentRecords &&
              currentRecords.map((country) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={country.name.common}
                  tabIndex={-1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={country.flags.png} alt="country" />
                  </TableCell>
                  <TableCell align="left">{country.name.common}</TableCell>
                  <TableCell align="left">{country.region}</TableCell>
                  <TableCell align="left">
                    {new Intl.NumberFormat().format(country.population)}
                  </TableCell>
                  <TableCell align="left">
                    {Object.values(country.languages || []).map((lan) => (
                      <ul key={lan}>
                        <li>{lan}</li>
                      </ul>
                    ))}
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
