
import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { userSliceActions } from "../redux/slices/userSlice/userSlice";
import { postSliceActions } from "../redux/slices/postSlice/postSlice";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice";

const ComplexPage = () => {
    const dispatch = useAppDispatch();

    const { users, loadState: usersLoaded } = useAppSelector(({ userSlice }) => userSlice);
    const { posts, loadState: postsLoaded } = useAppSelector(({ postSlice }) => postSlice);
    const { comments, loadState: commentsLoaded } = useAppSelector(({ commentSlice }) => commentSlice);

    useEffect(() => {
        if (!usersLoaded) dispatch(userSliceActions.loadUsers());
        if (!postsLoaded) dispatch(postSliceActions.loadPosts());
        if (!commentsLoaded) dispatch(commentSliceActions.loadComments());
    }, [usersLoaded, postsLoaded, commentsLoaded, dispatch]);

    if (!usersLoaded || !postsLoaded || !commentsLoaded) {
        return <div>Loading...</div>;
    }

    const user = users[0];
    if (!user) return <div>There's no users data</div>;

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

export default ComplexPage;
