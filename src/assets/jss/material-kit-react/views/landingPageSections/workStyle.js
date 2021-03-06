import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    // textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  carListImage: {
    width: "100%",
  },
  price: {
    color: "#000",
    fontSize: "16px",
  },
  carList: {
    minHeight: "500px",
    alignItems: "stretch",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
};

export default workStyle;
