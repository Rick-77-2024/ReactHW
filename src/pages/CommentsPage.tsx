
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice";

export const CommentsPage = () => {
    const { comments, loadState } = useAppSelector(({ commentSlice }) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (comments.length === 0) {
            dispatch(commentSliceActions.loadComments());
        }
    }, [comments.length, dispatch]);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {comments.map((comment) => (
                <div key={comment.id}>{comment.name}</div>
            ))}
        </div>
    );
};
