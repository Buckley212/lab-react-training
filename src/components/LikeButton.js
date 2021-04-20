import { useState } from 'react';

const LikeButton = () => {

    let [counter, setCounter] = useState(0);

    const up = e => setCounter(++counter);

    return (
        <div>
            <button onClick={up}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton