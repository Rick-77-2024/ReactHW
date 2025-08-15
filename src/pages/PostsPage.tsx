
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { postSliceActions } from "../redux/slices/postSlice/postSlice";
import { userSliceActions } from "../redux/slices/userSlice/userSlice";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice";

export const PostsPage = () => {
    const { posts, loadState: postsLoaded } = useAppSelector(({ postSlice }) => postSlice);
    const { loadState: usersLoaded } = useAppSelector(({ userSlice }) => userSlice);
    const { loadState: commentsLoaded } = useAppSelector(({ commentSlice }) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!postsLoaded) {
            dispatch(postSliceActions.loadPosts());
        }
        if (!usersLoaded) {
            dispatch(userSliceActions.loadUsers());
        }
        if (!commentsLoaded) {
            dispatch(commentSliceActions.loadComments());
        }
    }, [dispatch, postsLoaded, usersLoaded, commentsLoaded]);

    return (
        <div>
            {!postsLoaded && <div>Loading...</div>}
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};
