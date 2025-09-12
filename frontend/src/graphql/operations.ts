import { gql } from '@apollo/client';

// export const LOGIN_MUTATION = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         id
//         firstname
//         lastname
//         email
//         password
//         date_of_birth
//         image_url
//       }
//     }
//   }
// `;

// export const REGISTER_MUTATION = gql`
//   mutation Register($input: RegisterInput!) {
//     register(input: $input) {
//       token
//       user {
//         id
//         firstname
//         lastname
//         email
//         password
//         date_of_birth
//         image_url
//       }
//     }
//   }
// `;

export const GET_COUCOU = gql`
  query Query {
    coucou
  }
`;