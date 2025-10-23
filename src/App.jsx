import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import "./index.scss";
import Log from "./components/Log";
import { WINNING_COMBINATION } from "./winning-combination";

const INIT_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const PLAYER = {
    "X": "Player 1",
    "O": "Player 2",
}


function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O"
    }
    return currentPlayer;

}

function App() {
    const [gameTurn, setGameTurn] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurn);
    const [player, setPlayer] = useState(PLAYER)

    let gameBoard = INIT_GAME_BOARD;
    let winner;

    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player
    }

    for (const combination of WINNING_COMBINATION) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]
        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurn((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updateTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurns
            ]
            return updateTurns;
        })
    }

    const handlePlayerNameChange = (symbol, name) => {
        setPlayer((prevPlayer) => {
            return {
                ...prevPlayer,
                [symbol]: name
            }
        })

    }
    return (
        <main>
            <div id="main-container">
                <Player initalName={player.X} symbol="X" activePlayer={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
                <Player initalName={player.O} symbol="O" activePlayer={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
            </div>
            {winner && <p> Winner player : {winner}</p>}
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            <Log turns={gameTurn} />
        </main>

    )
}

export default App;