
import CommentComponent from "../comment-component/CommentComponent.tsx";
import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComment} from "../../services/api.service.ts";

const CommentComponents = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getComment()
            .then((value: IComment[]) => {
                setComments(value);
            })
    }, [])

    return (
        <>
            {comments.map(comment => <CommentComponent key={comment.id} item={comment}/>)}
        </>
    );
};

export default CommentComponents;
