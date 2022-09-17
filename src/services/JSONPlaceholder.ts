import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '../config';

import type { Comment, NewPost, Post } from '../types/redux';

export const JSONPlaceholderAPI = createApi({
	reducerPath: 'JSONPlaceholderAPI',
	baseQuery: fetchBaseQuery({ baseUrl: API }),

	// ExtraOptions
	tagTypes: ['Posts'],

	// EndPoints
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], undefined>({
			query: () => `/posts`,
			providesTags: ['Posts'],
		}),
		getPostById: builder.query<Post, number>({
			query: (postId) => `/posts/${postId}`,
		}),
		getCommentsOfPostById: builder.query<Comment[], number>({
			query: (postId) => `/posts/${postId}/comments`,
		}),
		getComments: builder.query<Comment[], undefined>({
			query: () => `/comments`,
		}),

		newPost: builder.mutation<Post, NewPost>({
			query: (newPost: NewPost) => ({
				url: '/posts',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: newPost,
			}),
			invalidatesTags: ['Posts'],
			extraOptions: { maxRetries: 0 },
		}),
	}),
});

export const {
	useGetPostsQuery,
	useGetPostByIdQuery,
	useGetCommentsOfPostByIdQuery,
	useGetCommentsQuery,
	useNewPostMutation,
} = JSONPlaceholderAPI;
