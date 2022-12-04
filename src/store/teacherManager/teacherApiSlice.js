import { apiSlice } from "../../Core/services/api/apiSlice";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLastTeacher: builder.query({
      query: () => "employee/getlastteachers",
      providesTags: ["teacher"],
    }),
    getAllTeachers: builder.query({
      query: () => "employee/getallteachers",
      providesTags: ["teacher"],
    }),
    getEmployee: builder.query({
      query: (id) => ({
        url: `employee/${id.id}`,
        headers: {
          "x-auth-token": id.token,
        },
      }),
      transformResponse: (responseData) => {
        console.log(responseData);
        return responseData.result;
      },
      // providesTags: ["teacher"],
    }),
  }),
});

export const {
  useGetLastTeacherQuery,
  useGetAllTeachersQuery,
  useGetEmployeeQuery,
} = teacherApiSlice;
