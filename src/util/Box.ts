export class Box {
    readonly x: number;
    readonly y: number;
    readonly scale: number;


    constructor(x: number, y: number, scale: number = 1) {
        this.x = x;
        this.y = y;
        this.scale = scale;
    }

    mul(ratio: number) {
        return new Box(this.x * ratio, this.y * ratio, this.scale * ratio);
    }
}
