import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "200px",
  },
});

const SelectedCountry = ({ selectedCountry }) => {
  const classes = useStyles();
  return (
    <div id="card">
      {Object.values(selectedCountry || []).map((c) => (
        <Card className={classes.root} key={c}>
          <CardMedia
            className={classes.media}
            image={c.flags[1]}
            title="Flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              {c.name.common}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              Capital: {c.capital}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The country belongs to <span className="blue">{c.region}</span>{" "}
              region and <span className="blue">{c.subregion}</span> sub-region.
              Located at the <span className="blue">{c.latlng[0]}</span>{" "}
              latitude and <span className="blue">{c.latlng[1]}</span>{" "}
              longitude, this country has population of{" "}
              <span className="blue">{new Intl.NumberFormat().format(c.population)}</span>.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SelectedCountry;
