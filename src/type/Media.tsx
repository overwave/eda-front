export interface Media {
    name: string;
    width: number;
    height: number;
    type: MediaType;
}

export type MediaType = "PHOTO" | "VIDEO" | "ANIMATION";
