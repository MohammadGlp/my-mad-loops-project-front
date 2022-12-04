import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.madloops.sepehracademy.ir/api/",
    headers: { "content-type": "application/json" },
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || getState().authSession.token;

      if (token) {
        headers.set("x-auth-token", `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
