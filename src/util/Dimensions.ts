import {Node} from "./Node";
import {Box} from "./Box";

export function justify(boxes: Box[], targetWidth: number, targetHeight: number, gap: number) {
    if (boxes.length === 0) {
        return [];
    }

    const root = new Node([], 0);

    traverse(root, boxes, 0, targetWidth, targetHeight, gap);
    root.countScore();
    const bestChild = root.getBestChild();

    return bestChild.getBoxesFromRoot(boxes.length);
}

function traverse(parentNode: Node, boxes: Box[], from: number, targetWidth: number, targetHeight: number, gap: number) {
    let cursor = from;
    let occupiedWidth = gap;

    const row: Box[] = [];
    for (; cursor < boxes.length && occupiedWidth < targetWidth; cursor++) {
        let box = boxes[cursor];
        const ratio = targetHeight / box.y;
        box = new Box(box.x * ratio, box.y * ratio, box.scale);
        row.push(box);
        occupiedWidth += box.x + gap;
    }

    if (cursor > from) {
        const node = createRow(row, targetWidth, gap);
        parentNode.add(node);
        traverse(node, boxes, cursor, targetWidth, targetHeight, gap);
    }
    if (cursor - 1 > from) {
        const node = createRow(row.slice(0, -1), targetWidth, gap);
        parentNode.add(node);
        traverse(node, boxes, cursor - 1, targetWidth, targetHeight, gap);
    }
}

const maxHeight = 700;

function createRow(row: Box[], targetWidth: number, gap: number) {
    let width = (row.length - 1) * gap;
    for (const box of row) {
        width += box.x;
    }

    let ratio = targetWidth / width;
    const height = row[0].y;
    if (height * ratio > maxHeight) {
        ratio = maxHeight / height;
    }

    const result = row.map(box => box.mul(ratio));

    let scoreSum = 0;
    for (const box of result) {
        const score = (1 - box.scale) * 100;
        scoreSum += score * score;
    }

    return new Node(result, scoreSum);
}
