import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function CreateCarSection() {
  const classes = useStyles();
  const carData = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Cars List</h2>
      <GridContainer>
        {carData && carData.map(item => (

          <GridItem xs={12} sm={6} md={4}>
          <h4 className={classes.title}>{item.title}</h4>
          <photo
            src="https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg"
            alt="Rounded Image"
            class="rounded img-fluid"
            />
            <p>{item.year}</p>
        </GridItem>)
        )}
        
      </GridContainer>
    </div>
  );
}
