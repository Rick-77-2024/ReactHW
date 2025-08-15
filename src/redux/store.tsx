
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice/userSlice";
import { postSlice } from "./slices/postSlice/postSlice";
import { commentSlice } from "./slices/commentSlice/commentSlice";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
