import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { userSliceActions } from "../redux/slices/userSlice/userSlice";
import { postSliceActions } from "../redux/slices/postSlice/postSlice";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice";

export const UserPage = () => {
    const { id } = useParams();
    const { user, loadState: userLoaded } = useAppSelector(({ userSlice }) => userSlice);
    const { posts, loadState: postsLoaded } = useAppSelector(({ postSlice }) => postSlice);
    const { comments, loadState: commentsLoaded } = useAppSelector(({ commentSlice }) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(userSliceActions.loadUser(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (!postsLoaded) {
            dispatch(postSliceActions.loadPosts());
        }
        if (!commentsLoaded) {
            dispatch(commentSliceActions.loadComments());
        }
    }, [postsLoaded, commentsLoaded, dispatch]);

    if (!userLoaded || !postsLoaded || !commentsLoaded) {
        return <div>Loading...</div>;
    }

    if (!user) return <div>There's no user data</div>;

    const userPosts = posts.filter(post => post.userId === user.id);

    return (
        <div>
            <h2>User</h2>
            <div>{user.id} - {user.name}</div>

            <h2>User posts</h2>
            {userPosts.length === 0 && <div>There are no posts</div>}
            {userPosts.map(post => (
                <div key={post.id} style={{ marginBottom: '1em' }}>
                    <strong>{post.title}</strong>
                    <div>{post.body}</div>
                    <h4>Comments:</h4>
                    {comments.filter(c => c.postId === post.id).map(comment => (
                        <div key={comment.id} style={{ marginLeft: '1em' }}>
                            <b>{comment.name}</b>: {comment.body}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};