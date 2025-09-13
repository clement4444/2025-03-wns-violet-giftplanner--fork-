import { gql } from '@apollo/client';

// mutation pour la connexion
export const LOIGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data){
      id
      firstName
      lastName
      email
      phone_number
      date_of_birth
      createdAt
      updatedAt
      image_url
      isVerified
      isAdmin
    }
  }
`;

// query pour récupérer le profil de l'utilisateur connecté
export const GET_ME_PROFILE = gql`
  query GetMeProfile {
    getMeProfile {
      id
      firstName
      lastName
      email
      phone_number
      date_of_birth
      createdAt
      updatedAt
      image_url
      isVerified
      isAdmin
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;