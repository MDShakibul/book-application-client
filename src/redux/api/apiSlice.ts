import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = (
  headers: any,
  { getState }: { getState: () => any }
) => {
  const token = localStorage.getItem('token');
  console.log();
  if (token) {
    headers.set('authorization', `${token}`);
  }
  return headers;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1',prepareHeaders}),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/users/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: 'POST',
        prepareHeaders,
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
    }),
    getAllBooks: builder.query({
      query: () =>({
        url: `/books`,
      })
    }),
    getSingleBooks: builder.query({
      query: (id) =>({
        url: `/books/${id}`,
      })
    }),
  }),
});

export const { useCreateUserMutation, useSignInMutation, useLogoutMutation, useGetAllBooksQuery, useGetSingleBooksQuery } =
  api;
