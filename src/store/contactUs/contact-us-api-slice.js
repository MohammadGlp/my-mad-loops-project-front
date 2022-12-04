import { apiSlice } from "./../../Core/services/api/apiSlice";

export const contactUsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (obj) => ({
        url: "contactUs",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["contactUs"],
    }),
  }),
});

export const { useContactUsMutation } = contactUsApiSlice;
