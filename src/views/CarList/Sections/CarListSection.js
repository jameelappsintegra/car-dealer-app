import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import { GET_ALL_VEHICLE } from "./graphql";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function CreateCarSection() {
  let history = useHistory();
  const classes = useStyles();
  const { data: vehicleList } = useQuery(GET_ALL_VEHICLE);
  const [vehicleListItems, setVehicleListItems] = useState([]);
  
  useEffect(() => {
    if (vehicleList) {
      setVehicleListItems(vehicleList.Vehicle);
    }
  }, [vehicleList]);

  return (
    <div className={classes.section}>
      <a href="/create-vehicle">View All Car</a>
      <h2 className={classes.title}>Car List</h2>
      <GridContainer direction="row" justify="flex-start" >
        {vehicleListItems &&
          vehicleListItems.map((item, i) => (
            <GridItem key={i} xs={12} sm={6} md={4} className={classes.carList}>
              <h4 className={classes.title}>{item.name}</h4>
              <img
                src={item.photo}
                alt="Rounded Image"
                className={classes.carListImage}
              />
              <GridContainer
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <GridItem xs={12} sm={6} md={12} className={classes.description}>
                  Year : {item.engine}{" "}
                </GridItem>
                <GridItem xs={12} sm={6} md={12} className={classes.description}>
                  transmition : {item.transmission}{" "}
                </GridItem>
              </GridContainer>
              <GridContainer
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <GridItem xs={12} sm={6} md={12} className={classes.description}>
                  Color Exterior : {item.color_exterior}
                </GridItem>
                <GridItem xs={12} sm={6} md={12} className={classes.description}>
                  Color Interior : {item.color_interior}
                </GridItem>
              </GridContainer>
              <p className={classes.price}>{item.price} AED</p>

              <Button
                color="primary"
                size="lg"
                onClick={() => {
                  history.push(`/car-details/${item.id}`);
                }}
                rel="noopener noreferrer"
              >
                View Details
              </Button>
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
