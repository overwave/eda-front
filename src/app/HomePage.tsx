import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getPosts, selectPosts} from "../store/Posts";
import React from "react";

export default function HomePage() {
    const posts = useAppSelector(selectPosts);

    const dispatch = useAppDispatch();
    if (posts.value.length === 0 && posts.status === 'initial') {
        dispatch(getPosts());
    }

    return (
        <div>
            {
                posts.value.map(post => {
                    return <p>{post.text}</p>;
                })
            }
        </div>
    );
}
