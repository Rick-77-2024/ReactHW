
import PostComponent from "../post-component/PostComponent.tsx";
import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getPost} from "../../services/api.service.ts";

const PostComponents = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPost()
            .then((value: IPost[]) => {
                setPosts(value);
            })
    }, [])

    return (
        <>
            {posts.map(post => <PostComponent key={post.id} item={post}/>)}
        </>
    );
};

export default PostComponents;
