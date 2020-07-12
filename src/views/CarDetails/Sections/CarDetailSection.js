import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";


const useStyles = makeStyles(styles);

export default function CarDetailSection(props) {
  const classes = useStyles();
  const {vehicleData} = props;
  
  return (
    <div className={classes.section}>
      <a href="/car-list">Back</a>

      <h2 className={classes.title}>{vehicleData.name}</h2>
      <GridContainer direction="row" justify="flex-start" alignItems="center">
        <GridItem xs={12} sm={6} md={6}>
          <img
            src={vehicleData.photo}
            alt="Rounded Image"
            className={classes.carListImage}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            Year : {vehicleData.year}
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            Engine : {vehicleData.engine}
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            transmission : {vehicleData.transmission}
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            Fuel Type : {vehicleData.fuel_type}
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            Color Exterior : {vehicleData.color_exterior}
          </GridItem>
          <GridItem xs={12} sm={6} md={6} className={classes.description}>
            Color Interior : {vehicleData.color_interior}
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            className={classes.description}
            className={classes.price}
          >
            Price : {vehicleData.price} AED
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
