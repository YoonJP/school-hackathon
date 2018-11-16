import React from "react";
import classNames from "classnames";
import { ROWS, COLS } from "./constants";

const table = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(null));

export default function Board(props) {
    const { joints, end, fruit } = props;

    return (
        <div className={classNames("board", { end })}>
            <div className="row">
                <div className="col joint" />
                <div className="col joint" />
                <div className="col joint" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col fruit" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
            </div>
            <div className="row">
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
                <div className="col" />
            </div>
        </div>
    );
}
