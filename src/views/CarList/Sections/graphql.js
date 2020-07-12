import gql from "graphql-tag";

export const GET_ALL_VEHICLE = gql`
  query GET_ALL_VEHICLE {
    Vehicle {
    name
    transmission
    categoryName: categoryById {
      name
    }
    photo
    price
    fuel_type
    engine
    id
    year
    engine
    color_interior
    color_exterior
  }
}

`;