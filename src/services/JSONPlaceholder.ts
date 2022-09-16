import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '../config';

import type { Comment, Post } from '../types/redux';

export const JSONPlaceholderAPI = createApi({
	reducerPath: 'JSONPlaceholderAPI',
	baseQuery: fetchBaseQuery({ baseUrl: API }),
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], undefined>({
			query: () => `/posts`,
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
	}),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetCommentsOfPostByIdQuery, useGetCommentsQuery } =
	JSONPlaceholderAPI;
