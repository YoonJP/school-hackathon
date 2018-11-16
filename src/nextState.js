// 테스트 해보기: https://repl.it/@seungha/snake-game-next-state-function
import { ROWS, COLS } from "./constants";

// Game 상태를 입력받아 joints와 fruit가 변경된 새 상태를 반환하는 함수
export default function ({
    joints: oldJoints,
    fruit: oldFruit,
    direction,
    end
}) {
    if (end) {
        return {
            joints: oldJoints,
            fruit: oldFruit,
            direction,
            end
        };
    }
    let fruit = oldFruit;
    const joints = [...oldJoints];
    let newHead;
    if (direction === "right") {
        newHead = {
            x: joints[0].x + 1,
            y: joints[0].y
        };
    } else if (direction === "left") {
        newHead = {
            x: joints[0].x - 1,
            y: joints[0].y
        };
    } else if (direction === "up") {
        newHead = {
            x: joints[0].x,
            y: joints[0].y - 1
        };
    } else if (direction === "down") {
        newHead = {
            x: joints[0].x,
            y: joints[0].y + 1
        };
    }

    if (
        newHead.x < 0 ||
        newHead.x >= COLS ||
        newHead.y < 0 ||
        newHead.y >= ROWS
    ) {
        end = true;
    } else if (joints.some(j => j.x === newHead.x && j.y === newHead.y)) {
        end = true;
    } else {
        joints.unshift(newHead);
        if (newHead.x !== fruit.x || newHead.y !== fruit.y) {
            joints.pop();
        } else {
            do {
                fruit = {
                    x: Math.floor(Math.random() * COLS),
                    y: Math.floor(Math.random() * ROWS)
                };
            } while (joints.some(j => j.x === fruit.x && j.y === fruit.y));
        }
    }

    return {
        joints,
        fruit,
        direction,
        end
    };
}
