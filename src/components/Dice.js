import { useState } from 'react';

const Dice = () => {

    const [picture, setPicture] = useState(true);
    const diceThrow = e => picture ? setInterval(function(){setPicture(false)}, 1000) : setPicture(true);
    const ran = () => `/img/dice${Math.ceil(Math.random()*6)}.png`;

    return (
        <div className="dice">
            {picture ? <img src="/img/dice-empty.png" onClick={diceThrow} alt="dice"></img> : <img src={ran()} onClick={diceThrow} alt="dice"></img>}
        </div>
    )
}

export default Dice;