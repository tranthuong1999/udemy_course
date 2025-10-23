import React, { useState } from 'react'


const GameBoard = ({ onSelectSquare, board }) => {
    // console.log("game baoird", gameBoard)

    return (
        <ol id='game_board'>
            {
                board.map((row, rowIndex) => {
                    return (
                        <li key={rowIndex}>
                            {
                                row.map((playerSymbol, colIndex) => {
                                    return (
                                        <li key={colIndex} className='list_item'>
                                            <button onClick={() => {
                                                onSelectSquare(rowIndex, colIndex)
                                            }} disabled={playerSymbol}> {playerSymbol}</button>
                                        </li>
                                    )
                                })
                            }
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default GameBoard