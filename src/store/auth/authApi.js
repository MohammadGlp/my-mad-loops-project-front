import { apiSlice } from "./../../Core/services/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginStudent: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["login"],
    }),
    registerStudent: builder.mutation({
      query: (obj) => ({
        url: "auth/register",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["register"],
    }),
    forgetPassword: builder.mutation({
      query: (obj) => ({
        url: "forgetpassword",
        method: "POST",
        body: { email: obj.email },
      }),
      invalidatesTags: ["forgetpassword"],
    }),
    resetPassword: builder.mutation({
      query: (pass) => ({
        url: `resetPassword/${pass.token}`,
        method: "POST",
        body: { password: pass.password },
      }),
      invalidatesTags: ["resetPassword"],
    }),
  }),
});

export const {
  useLoginStudentMutation,
  useRegisterStudentMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
