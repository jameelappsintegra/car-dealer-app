
import gql from "graphql-tag";

export const GET_VEHICLE_CATEGORY = gql`
  query GET_VEHICLE_CATEGORY{
    Vehicle_category{
    name
    id
  }
}`;

export const INSERT_VEHICLE = gql`
mutation insert_Vehicle($payload: [Vehicle_insert_input!]!){
insert_Vehicle(objects: $payload ) {
  affected_rows
}
}`;