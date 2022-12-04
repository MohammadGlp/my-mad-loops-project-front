import { apiSlice } from "../../Core/services/api/apiSlice";

export const lessonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: () => "lesson",
      providesTags: ["lesson"],
    }),
  }),
});

export const { useGetLessonsQuery } = lessonApiSlice;
