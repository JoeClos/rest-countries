import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
// import { TablePagination } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
// import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { Stack } from "@mui/system";
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
      {/* <Stack spacing={2}> */}
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search country"
          />
          <i className="search icon"></i>
        </div>
      </div>
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
                  key={index}
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
                        <ul key={index}>
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
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={setCountries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      {/* </Stack> */}
    </div>
  );
};

export default FrontPage;
