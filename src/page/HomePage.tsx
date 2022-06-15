import React from "react";
import { Map } from '../component/map/Map';

import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getPosts, selectPosts} from "../store/Posts";
import {GoogleLoginButton} from "../component/login/GoogleLoginButton";

export function HomePage() {
    const posts = useAppSelector(selectPosts);

    const dispatch = useAppDispatch();
    if (posts.value.length === 0 && posts.status === 'initial') {
        dispatch(getPosts());
    }


    return (
        <div>
            {
                posts.value.map(post => {
                    return <p key={post.id}>{post.text}</p>;
                })
            }
            asd
            <br/>
            asd
            <br/>
            asd
            <br/>
            asd
            <br/>
            asd
            <br/>
            asd
            <br/>
            asd
            <br/>
            {/*<Map></Map>*/}
            <GoogleLoginButton></GoogleLoginButton>
        </div>
    );
}
