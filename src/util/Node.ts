import {Box} from "./Box";

export class Node {
    parent?: Node;
    readonly children: Node[];
    readonly boxes: Box[];
    score: number;


    constructor(boxes: Box[], score: number) {
        this.children = [];
        this.boxes = boxes;
        this.score = score;
    }

    add(child: Node) {
        child.parent = this;
        this.children.push(child);
    }

    countScore() {
        if (this.parent !== undefined) {
            this.score += this.parent.score;
        }
        this.children.forEach(n => n.countScore());
    }

    getBestChild(): Node {
        if (this.children.length === 0) {
            return this;
        }
        return this.children.map(n => n.getBestChild())
            .reduce((n1, n2) => n1.score < n2.score ? n1 : n2);
    }

    getBoxesFromRoot(len: number) {
        const result: Box[] = [];
        let node: Node | undefined = this;
        let offset = 0;

        while (node !== undefined) {
            const currentLen = node.boxes.length;
            for (let i = 0; i < currentLen; i++) {
                result[i + len - currentLen - offset] = node.boxes[i];
            }
            offset += currentLen;
            node = node.parent;
        }

        return result;
    }
}
