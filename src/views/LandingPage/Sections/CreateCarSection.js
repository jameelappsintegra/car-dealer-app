import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { GET_VEHICLE_CATEGORY, INSERT_VEHICLE } from "./graphql";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function CreateCarSection() {
  const classes = useStyles();
  const [vehicleCategory,setVehicleCategory] = React.useState([]);
  const [values, setValues] = React.useState({
    vehicleImage: "",
    vehicleName: "",
    vehicleCategory: "",
    vehicleTransmission: "",
    vehicleFuelType: "",
    vehicleColorExterior: "",
    vehicleColorInterior: "",
    vehiclePrice:"",
    vehicleYear:""
  });
  const { data: vehicleCategoryData } = useQuery(GET_VEHICLE_CATEGORY);
  const [createNewVehicle] = useMutation(INSERT_VEHICLE);
  
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

  useEffect(()=>{
     if(vehicleCategoryData){
       console.log(vehicleCategoryData);
      setVehicleCategory(vehicleCategoryData.Vehicle_category);
     }
  }, [vehicleCategoryData]);

  const handleInputChange = (prop) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCategoryChange = (prop) => (event, value) => {
   if(event){
    setValues({ ...values, [prop]: value.id });
   }    
  };
  const handleFileUpload = (prop) => async (event) => {  
    const vehicleImageBase64 = await toBase64(event.target.files[0]);
    setValues({ ...values, [prop]: vehicleImageBase64 });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await createVehicle({
      name: values.vehicleName,
      photo: values.vehicleImage,
      transmission: values.vehicleTransmission,
      fuel_type: values.vehicleFuelType,
      color_interior: values.vehicleColorInterior,
      color_exterior: values.vehicleColorExterior,
      category_id: values.vehicleCategory,
      price: values.vehiclePrice,
      year: values.vehicleYear,
    });
   
  }

  const createVehicle = async (payload) => {
    const {data: {insert_Vehicle: {affected_rows}}} =  await createNewVehicle({
         variables: {
             payload: payload
         }
     });
     return affected_rows ? true: false;
   };

  return (
    <div className={classes.section}>
      <a href="/car-list">View All Car</a>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Create Vehicle</h2>
          <form onSubmit={handleFormSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Vehicle Image"
                  id="vehicleImage"
                  inputProps={{
                    type: "file",
                  }}
                  formControlProps={{
                    fullWidth: true,
                    value: values.vehicleName,
                    onChange: handleFileUpload("vehicleImage"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Vehicle Name"
                  id="vehicleName"
                  inputProps={{
                    inputRef: (el) => (setValues.vehicleName = el),
                  }}
                  formControlProps={{
                    fullWidth: true,
                    value: values.vehicleName,
                    onChange: handleInputChange("vehicleName"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Autocomplete
                  id="vehicleCategory"
                  className={classes.textArea}
                  onChange={handleCategoryChange("vehicleCategory")}
                  options={vehicleCategory}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} label="Vehicle category" />
                  )}
                />
              </GridItem>
              <CustomInput
                labelText="Transmission"
                id="Transmission"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleTransmission,
                  onChange: handleInputChange("vehicleTransmission"),
                }}
              />
              <CustomInput
                labelText="Year"
                id="Year"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleTransmission,
                  onChange: handleInputChange("vehicleYear"),
                }}
              />
              <CustomInput
                labelText="Price"
                id="Transmission"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleTransmission,
                  onChange: handleInputChange("vehiclePrice"),
                }}
              />
              <CustomInput
                labelText="Fuel Type"
                id="fuelType"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleFuelType,
                  onChange: handleInputChange("vehicleFuelType"),
                }}
              />
              <CustomInput
                labelText="Color exterior"
                id="colorExterior"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleColorExterior,
                  onChange: handleInputChange("vehicleColorExterior"),
                }}
              />
              <CustomInput
                labelText="Color interior"
                id="colorExterior"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  value: values.vehicleColorInterior,
                  onChange: handleInputChange("vehicleColorInterior"),
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" type="submit">
                  Save
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
