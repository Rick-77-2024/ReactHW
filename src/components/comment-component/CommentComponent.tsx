
 

import type {IComment} from "../../models/IComment.ts";
import "../comment-component/CommentComponent.css";

interface CommentComponentProps {
    item: IComment
}

const CommentComponent = ({item}: CommentComponentProps) => {
    return (
        <div className='ml-2.5'>
            <h3 className={item.body}>{item.body}</h3>
        </div>
    );
};

export default CommentComponent;
