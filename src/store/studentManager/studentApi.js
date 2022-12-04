import { apiSlice } from "./../../Core/services/api/apiSlice";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudent: builder.query({
      query: () => "student/getall",
      providesTags: ["student"],
    }),
    getStudentById: builder.query({
      query: (id) => ({
        url: `student/${id.id}`,
      }),
      transformResponse: (response) => response.result,
      providesTags: (result, id) => [
        { type: "student", id },
        // ...result.map((item) => ({ type: "student", id: item._id })),
      ],
    }),
    updateStudentInfo: builder.mutation({
      query: (obj) => ({
        url: `student/${obj._id}`,
        method: "PUT",
        body: {
          birthDate: obj.birthDate,
          email: obj.email,
          fullName: obj.fullName,
          nationalId: obj.nationalId,
          phoneNumber: obj.phoneNumber,
          profile: obj.profile,
        },
      }),
      invalidatesTags: () => [{ type: "student" }],
    }),
  }),
});

export const {
  useGetAllStudentQuery,
  useGetStudentByIdQuery,
  useUpdateStudentInfoMutation,
} = studentApiSlice;
