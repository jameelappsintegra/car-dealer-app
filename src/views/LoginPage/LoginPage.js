import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/react-hooks';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { INSERT_USER, GET_USER } from './graphql';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  let history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [createNewUser] = useMutation(INSERT_USER);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    email: '',
    showPassword: false,
  });
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  const { data: User } = useQuery(GET_USER, { variables: { email: credentials.email, password: credentials.password} });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCredentialsChange = (prop) => (event) => {
    setCredentials({ ...credentials, [prop]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {name, email, password} = values;
    const result = await createNew({
    name: name,
    email: email,
    password: password
   });
   
   if(result){
    // setValues({
    //     name: '',
    //     password: '',
    //     email: '',
    //     showPassword: false,
    // });
   }  

}
const createNew = async (payload) => {
 const {data: {insert_User: {affected_rows}}} =  await createNewUser({
      variables: {
          payload: payload
      }
  });
  return affected_rows ? true: false;
};
/* Login Action Items */
const handleLoginFormSubmit = async (event) =>{
  event.preventDefault();
  console.log(User)
   if(User){
   
     history.push("/landing-page");
   }
}
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Car Application"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleLoginFormSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="loginEmail"
                      formControlProps={{
                        fullWidth: true,
                        value: values.email,
                        onChange: handleCredentialsChange("email"),
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="loginPass"
                      formControlProps={{
                        fullWidth: true,
                        value: credentials.password,
                        onChange: handleCredentialsChange("password"),
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Let's GO
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleFormSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Create New Account</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                        value: values.name,
                        onChange: handleChange("name"),
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                        value: values.email,
                        onChange: handleChange("email"),
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      value={values.password}
                      onChange={handleChange("password")}
                      formControlProps={{
                        fullWidth: true,
                        value: values.password,
                        onChange: handleChange("password"),
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Create Account
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
