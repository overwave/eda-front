import React from "react";
import {Button, Card, CardContent, Container, Typography} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getPosts, selectPosts} from "../store/Posts";
import {FlexImages} from "../component/flex_images/FlexImages";

export function ModerationPage() {
    const posts = useAppSelector(selectPosts);

    const dispatch = useAppDispatch();
    if (posts.value.length === 0 && posts.status === 'initial') {
        dispatch(getPosts());
    }

    return (
        <Container component="main" maxWidth="md" sx={{mt: '64px'}}>
            <Button variant="contained" color='secondary'>Contained</Button>
            {posts.value.map(post =>
                <Card key={post.id} sx={{marginBottom: '24px'}}>
                    <CardContent>
                        <FlexImages media={post.media}/>
                        {
                            post.text &&
                            <Typography variant="body2">
                                {
                                    post.text.split(/\n+/).map((line, i) =>
                                        <React.Fragment key={i}>
                                            {i === 0 ? <></> : <br/>}
                                            {line}
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        }
                    </CardContent>
                </Card>
            )}
        </Container>
    );
}
