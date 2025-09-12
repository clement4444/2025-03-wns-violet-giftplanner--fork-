import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['ID']['output'];
  logout: Scalars['ID']['output'];
  signup: Scalars['ID']['output'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSignupArgs = {
  data: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  coucou: Scalars['String']['output'];
  getAllUsers: Array<Users>;
  getAllUsersAdmin: Array<Users>;
  testAdmin: Scalars['String']['output'];
  testUser: Scalars['String']['output'];
  welcomeAll: Scalars['String']['output'];
};

export type SignupInput = {
  date_of_birth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['DateTimeISO']['output'];
  date_of_birth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GetWelcomeAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWelcomeAllQuery = { __typename?: 'Query', welcomeAll: string };


export const GetWelcomeAllDocument = gql`
    query GetWelcomeAll {
  welcomeAll
}
    `;

/**
 * __useGetWelcomeAllQuery__
 *
 * To run a query within a React component, call `useGetWelcomeAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWelcomeAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWelcomeAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWelcomeAllQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>(GetWelcomeAllDocument, options);
      }
export function useGetWelcomeAllLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>(GetWelcomeAllDocument, options);
        }
export function useGetWelcomeAllSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>(GetWelcomeAllDocument, options);
        }
export type GetWelcomeAllQueryHookResult = ReturnType<typeof useGetWelcomeAllQuery>;
export type GetWelcomeAllLazyQueryHookResult = ReturnType<typeof useGetWelcomeAllLazyQuery>;
export type GetWelcomeAllSuspenseQueryHookResult = ReturnType<typeof useGetWelcomeAllSuspenseQuery>;
export type GetWelcomeAllQueryResult = ApolloReactCommon.QueryResult<GetWelcomeAllQuery, GetWelcomeAllQueryVariables>;