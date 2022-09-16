import { configureStore } from '@reduxjs/toolkit';

// Slices
// imports

// Services
import { JSONPlaceholderAPI } from '../services/JSONPlaceholder';

export const store = configureStore({
	reducer: {
		[JSONPlaceholderAPI.reducerPath]: JSONPlaceholderAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(JSONPlaceholderAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
