import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = (
  headers: any,
  { getState }: { getState: () => any }
) => {
  const token = localStorage.getItem('token');
  if (token) {
    headers.set('authorization', `${token}`);
  }
  return headers;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders,
  }),
  tagTypes: ['addNewBook', 'comment'],
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
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
    }),
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/add-book`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['addNewBook'],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/create-comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    getAllBooks: builder.query({
      query: () => ({
        url: `/books`,
      }),
      providesTags: ['addNewBook'],
    }),
    getSingleBooks: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
      providesTags: ['comment'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useSignInMutation,
  useLogoutMutation,
  useGetAllBooksQuery,
  useGetSingleBooksQuery,
  useAddBookMutation,
  usePostCommentMutation
} = api;
