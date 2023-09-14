import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const capsuleApi = createApi({
  reducerPath: 'capsuleApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.spacexdata.com/v3/',
    prepareHeaders: (headers) => {
      // headers.set('Accept', '*/*');
      // headers.set('Accept-Encoding', 'gzip, deflate, br');
      // headers.set('Connection', 'keep-alive');
    },
  }),
  endpoints: (builder) => ({
    getAllCapsules: builder.query({
      query:()=> 'capsules',
    }),
    getCapsule: builder.query({
      query:(id)=> `capsules/${id}`,
    }),
  }),
})
export const { useGetAllCapsulesQuery, useGetCapsuleQuery } = capsuleApi
