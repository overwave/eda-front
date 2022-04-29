import {TextAttachment} from './TextAttachment';
import {Media} from './Media';

export interface Post {
    id: number;
    text: string;
    textAttachments: TextAttachment[];
    media: Media[];
    hidden: boolean;
}
