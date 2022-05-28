import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query<post[], void>({
      query: (name) => `/posts`,
    }),
  }),
});

export const { useGetPostQuery } = postApi;
