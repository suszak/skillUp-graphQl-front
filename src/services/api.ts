import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { User } from '@/models/User';

export interface GetUsersResponse {
  allUsers: User[];
}

export interface GetAllProductsImages {
  allProducts: {
    id: string;
    photo: {
      url: string;
    };
  }[];
}

export interface GetProduct {
  product: {
    name: string;
    description: string;
    price: number;
  };
}

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://graphql.datocms.com/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_DATO_CMS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getUsers: builder.query<GetUsersResponse, void>({
      query: () => ({
        document: gql`
          query {
            allUsers {
              firstName
            }
          }
        `,
      }),
    }),
    getFilteredUsers: builder.query<GetUsersResponse, { name: string }>({
      query: ({ name }) => ({
        document: gql`
          query {
            allUsers(filter: {firstName: {matches: {pattern: "${name}"}}}) {
              firstName
            }
          }
        `,
      }),
    }),
    getSortedUsers: builder.query<GetUsersResponse, void>({
      query: () => ({
        document: gql`
          query {
            allUsers(orderBy: firstName_ASC) {
              firstName
              id
            }
          }
        `,
      }),
    }),
    getAllProductsImages: builder.query<GetAllProductsImages, { requestOptions: string }>({
      query: ({ requestOptions }) => ({
        document: gql`
          query {
            allProducts${requestOptions} {
              id
              photo {
                url
              }
            }
          }`,
      }),
    }),
    getProduct: builder.query<GetProduct, string>({
      query: id => ({
        document: gql`
          query {
            product(filter: {id: {eq: "${id}"}}) {
              name
              description
              price
            }
          }`,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetFilteredUsersQuery,
  useGetSortedUsersQuery,
  useGetAllProductsImagesQuery,
  useGetProductQuery,
} = api;
