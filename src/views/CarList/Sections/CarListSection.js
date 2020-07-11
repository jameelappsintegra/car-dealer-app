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
    {
      title: "The Shawshank Redemption",
      year: 1994,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "The Godfather",
      year: 1972,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      transmition: "Manual",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "12 Angry Men",
      year: 1957,
      transmition: "Manual",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "Schindler's List",
      year: 1993,
      transmition: "Manual",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "The Good, the Bad and the Ugly",
      year: 1966,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
    {
      title: "Fight Club",
      year: 1999,
      transmition: "automatic",
      exterior: "black",
      interior: "white",
      price: "10,000",
      photo:
        "https://demos.creative-tim.com/material-kit/assets/img/faces/avatar.jpg",
    },
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Cars List</h2>
      <GridContainer direction="row" justify="flex-start" alignItems="center">
        {carData &&
          carData.map((item) => (
            <GridItem xs={12} sm={6} md={4}>
              <h4 className={classes.title}>{item.title}</h4>
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
                <GridItem xs={12} sm={6} md={6} className={classes.description}>Year : {item.year} </GridItem>
                <GridItem xs={12} sm={6} md={6}vclassName={classes.description}>transmition : {item.transmition} </GridItem>
              </GridContainer>
              <GridContainer
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <GridItem xs={12} sm={6} md={6} className={classes.description}>
                  Color Exterior : {item.exterior}
                </GridItem>
                <GridItem xs={12} sm={6} md={6} className={classes.description}>
                  Color Interior : {item.interior}
                </GridItem>
              </GridContainer>
              <p className={classes.price}>{item.price} AED</p>
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
