import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface colorIndexProps {
    setColorIndex: (newIndex: number) => void;
    colorIndex: number;
}

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// eslint-disable-next-line prettier/prettier
function ChangeColor({
    setColorIndex,
    colorIndex
}: colorIndexProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

// eslint-disable-next-line prettier/prettier
function ColorPreview({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setColorIndex,
    colorIndex
}: colorIndexProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
