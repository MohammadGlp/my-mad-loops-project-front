import { apiSlice } from '../../Core/services/api/apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => 'comments/',
      transformResponse: (responseData) => {
        const newDate = responseData?.map((comment) => {
          const likeCount = Math.trunc(Math.random() * 50) + 1;
          comment.likeCount = likeCount;
          const disLikeCount = Math.trunc(Math.random() * 50) + 1;
          comment.disLikeCount = disLikeCount;

          const likeCountAdmin = Math.trunc(Math.random() * 50) + 1;
          comment.likeCountAdmin = likeCountAdmin;
          const disLikeCountAdmin =
            Math.trunc(Math.random() * 50) + 1;
          comment.disLikeCountAdmin = disLikeCountAdmin;

          return comment;
        });
        const loadedPosts = newDate?.sort(
          (a, b) =>
            new Date(b.createDate).getTime() -
            new Date(a.createDate).getTime()
        );
        return loadedPosts;
      },
      providesTags: (result, error, arg) => [
        { type: 'Comments', id: 'LIST' },
        ...result.map((item) => ({ type: 'Post', id: item._id })),
      ],
    }),
    addNewComment: builder.mutation({
      query: (comment) => ({
        url: 'comments/send',
        method: 'POST',
        body: {
          ...comment,
        },
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    addReply: builder.mutation({
      query: (Reply) => ({
        url: 'comments/answer',
        method: 'POST',
        body: {
          ...Reply,
        },
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddNewCommentMutation,
  useAddReplyMutation,
} = commentApiSlice;
