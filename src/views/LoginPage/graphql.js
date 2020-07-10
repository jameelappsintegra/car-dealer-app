import gql from "graphql-tag";

export const INSERT_USER = gql`
  mutation insert_User($payload: [User_insert_input!]!){
    insert_User(objects: $payload ) {
      affected_rows
    }
  }
`;
export const GET_USER = gql`
  query GET_USER($email: String!, $password: String!) {
  User(where: {email: {_eq: $email}, password: {_eq: $password}}){
    name
  }
}

`;