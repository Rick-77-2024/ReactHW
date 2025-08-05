
import {IPost} from "../../models/IPost.ts";
import "../post-component/PostComponent.css";

interface PostComponentProps {
    item: IPost
}

const PostComponent = ({item}: PostComponentProps) => {
    return (
        <div className='ml-2.5'>
            <h3 className={item.body}>{item.body}</h3>
        </div>
    );
};

export default PostComponent;
