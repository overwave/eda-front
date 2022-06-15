import React from "react";
import {Box as MuiBox, Skeleton} from "@mui/material";

import useDimensions from "react-cool-dimensions";
import {Media} from "../../type/Media";
import {Box} from "../../util/Box";
import {justify} from "../../util/Dimensions";
import style from './style.module.scss';

export interface FlexImagesProps {
    media: Media[];
}

function mapMediaToElement(media: Media, box: Box) {
    switch (media.type) {
        case "PHOTO":
            return <img src={`/api/public/media/${media.name}`}
                        key={media.name}
                        className={style.media}
                        alt="Attached media"
                        width={box.x}
                        height={box.y}
                        loading="lazy"/>;
        case "ANIMATION":
        case "VIDEO":
            return <video controls>
                <source src={`/api/public/media/${media.name}`}
                        key={media.name}
                        className={style.media}
                        width={box.x}
                        height={box.y}/>
            </video>
    }
}

export function FlexImages({media}: FlexImagesProps) {
    const {observe, width} = useDimensions<HTMLDivElement>();

    if (media.length === 0) {
        return <></>
    }

    if (width === 0) {
        return <MuiBox className={style.container} ref={observe}>
            {media.map(m => <Skeleton variant="text" key={m.name}/>)}
        </MuiBox>;
    }

    const boxes = media.map(m => new Box(m.width, m.height));
    const mediaRatios = justify(boxes, width, width / 2, 6);

    return <MuiBox className={style.container} ref={observe}>
        {
            media.map((m, i) => mapMediaToElement(m, mediaRatios[i]))
        }
    </MuiBox>;
}
