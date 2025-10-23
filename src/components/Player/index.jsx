import React from 'react';

export default function Player({ initalName, symbol, activePlayer, onChangeName }) {

    const [isEditing, setIsEditing] = React.useState(false);
    const [playerName, setPlayerName] = React.useState(initalName)

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleChangeName = (event) => {
        setPlayerName(event.target.value)
    }
    console.log("render 1")

    return (
        <li className={activePlayer ? 'active_player' : undefined}>
            <span className='player'>
                {
                    isEditing ? (
                        <input type="text" value={playerName} onChange={handleChangeName} />
                    ) : <span className='player_name'> {playerName}</span>
                }
                <span className='player-symbol'> {symbol}</span>
                <button onClick={handleEditClick}> {!isEditing ? 'Edit' : 'Save'}</button>
            </span>
        </li>
    )
}