import React from "react";
import ReactDOM from "react-dom";
import nextState from "./nextState";
import Board from "./Board";

import "./styles.css";

function App() {
    return <Game />;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            end: false,
            joints: [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }],
            fruit: { x: 10, y: 10 },
            direction: "right"
        };
    }

    componentDidMount() {
        this.keyDownHandler = e => {
            e.preventDefault();
            if (e.key === "ArrowDown") {
                this.setState({ direction: "down" });
            } else if (e.key === "ArrowUp") {
                this.setState({ direction: "up" });
            } else if (e.key === "ArrowLeft") {
                this.setState({ direction: "left" });
            } else if (e.key === "ArrowRight") {
                this.setState({ direction: "right" });
            }
            this.setState(nextState);
        };
        this.timerId = setInterval(() => {
            const { end } = this.state;
            if (!end) {
                this.setState(nextState);
            }
        }, 500);
        document.addEventListener("keydown", this.keyDownHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler);
        clearInterval(this.timerId);
    }

    handleRestart() {
        this.setState({
            joints: [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }],
            fruit: { x: 10, y: 10 },
            direction: "right",
            end: false
        });
    }

    render() {
        const { joints, end, fruit } = this.state;
        const score = joints.length;
        return (
            <div className="game">
                <h1>Snake Game</h1>
                <Board joints={joints} end={end} fruit={fruit} />
                <div>
                    <div>점수: {score}</div>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
