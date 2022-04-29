export interface TextAttachment {
    type: AttachmentType;
    offset: number
    length: number;
    value: string | undefined;
}

export enum AttachmentType {
    URL,
    NAMED_URL,
    BOLD,
    STRIKETHROUGH,
    HASHTAG,
    MENTION
}
