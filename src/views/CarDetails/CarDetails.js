import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import {GET_VEHICLE} from './graphql';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CarDetailSection from "./Sections/CarDetailSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CarDetails(props) {
  const classes = useStyles();
  const { vehicleId } = useParams();
  const { data: vehicleData } = useQuery(GET_VEHICLE, { variables: { id: vehicleId } } );
  const [vehicle, setVehicle] = useState({});
  
  useEffect(() => {
    if (vehicleData) {
      setVehicle(vehicleData.Vehicle[0]);
    }
  }, [vehicleData]);
  
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Car Application"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CarDetailSection vehicleData={vehicle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
