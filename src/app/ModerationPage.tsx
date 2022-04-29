import React from "react";
import {Card, CardContent, Container, ImageList, ImageListItem, Typography} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getPosts, selectPosts} from "../store/Posts";
import {Media} from "../type/Media";

export default function ModerationPage() {
    const posts = useAppSelector(selectPosts);

    const dispatch = useAppDispatch();
    if (posts.value.length === 0 && posts.status === 'initial') {
        dispatch(getPosts());
    }

    function mapMediaToElement(media: Media) {
        switch (media.type) {
            case "PHOTO":
                return <img src={`/api/media/${media.name}`}
                            alt="Attached media"
                            loading="lazy"/>;
            case "ANIMATION":
            case "VIDEO":
                return <video controls>
                    <source src={`/api/media/${media.name}`}/>
                </video>
        }
    }

    return (
        <Container component="main">
            {posts.value.map(post =>
                <Card key={post.id}>
                    <CardContent>
                        {post.media.length ?
                            <ImageList cols={Math.min(post.media.length, 3)} gap={8}>
                                {post.media.map(media => (
                                    <ImageListItem key={media.name}>
                                        {mapMediaToElement(media)}
                                    </ImageListItem>
                                ))}
                            </ImageList> : <></>
                        }
                        {
                            post.text &&
                            <Typography variant="body2">
                                {post.text}
                            </Typography>
                        }
                    </CardContent>
                </Card>
            )
            }
        </Container>
    );
}
