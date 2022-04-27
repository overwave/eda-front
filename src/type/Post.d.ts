import {File} from './File';

export interface Post {
    id: number;
    messageId: number;
    text: string
    file: File;
    type: PostType;
    hidden: boolean;
}

export enum PostType {
    TEXT,
    PHOTO,
    VIDEO,
    ANIMATION
}
