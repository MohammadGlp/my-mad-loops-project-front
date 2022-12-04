import { apiSlice } from "./../../Core/services/api/apiSlice";
import { dateConvert } from "../../Core/utils/TimeAndDateConverter";
export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "news",
      transformResponse: (responseData) => {
        const loadedNews = responseData.result.map((news) => {
          const dateRand = Math.trunc(Math.random() * 15000000000) + 1;
          const d = new Date();
          const timestamp = d.getTime();
          const newDate = new Date(timestamp - dateRand);
          const ISODate = newDate.toISOString();
          const xISO = dateConvert(ISODate);
          const studyTimeRand = Math.trunc(Math.random() * 15) + 1;
          const ViewRand = Math.trunc(Math.random() * 200) + 1;
          const likeRand = Math.trunc(Math.random() * 200) + 1;
          news.date = `${xISO.day} ${xISO.monthTitle} ${xISO.year}`;
          news.startDate = ISODate;
          news.like = likeRand;
          news.view = ViewRand;
          news.studyTime = studyTimeRand;
          return news;
        });
        return loadedNews;
      },
      providesTags: ["news"],
    }),
    getTopNews: builder.query({
      query: () => "news/topNews",
      providesTags: ["news"],
    }),
    getTopArticles: builder.query({
      query: () => "news/topArticles",
      providesTags: ["news"],
    }),
    getNewsById: builder.query({
      query: (id) => ({ url: `news/${id}` }),
      transformResponse: (response) => response.result,
      providesTags: (id) => [{ type: "news", id }],
    }),
    addNews: builder.mutation({
      query: (obj) => ({
        url: "news/",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["news"],
    }),
    updateNews: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `news/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["news"],
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["news"],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetTopNewsQuery,
  useGetTopArticlesQuery,
  useGetNewsByIdQuery,
  useDeleteNewsMutation,
  useAddNewsMutation,
  useUpdateNewsMutation,
} = newsApiSlice;
