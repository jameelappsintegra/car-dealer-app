import gql from "graphql-tag";

export const GET_VEHICLE = gql`
         query GET_VEHICLE($id: uuid!) {
           Vehicle(where: { id: { _eq: $id } }) {
             name
             transmission
             categoryName: categoryById {
               name
             }
             photo
             price
             fuel_type
             year
             transmission
             engine
             id
             color_interior
             color_exterior
           }
         }
       `;