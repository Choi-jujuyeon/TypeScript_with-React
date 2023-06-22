import { FC } from "react";

export enum Color {
    Pink = "pink",
    Red = "red",
    Blue = "blue",
    Green = "green",
}

export interface BoxProps {
    color: Color;
    width: number;
    height?: number;
}

const Box: FC<BoxProps> = ({ color, width, height }) => {
    return (
        <div
            style={{
                backgroundColor: color,
                width,
                height: height ? height : width,
                margin: 40,
            }}
        ></div>
    );
};

export default Box;
