import { useState } from 'react';

const Carousel = (props) => {
    let [counter, setCounter] = useState(0);

    const up = e => counter === props.imgs.length -1 ? setCounter(0) : setCounter(++counter);
    const down = e => counter < 0 ? setCounter(props.imgs.length) : setCounter(--counter);

    return (
        <div>
            <button onClick={down}>Left</button><img src={props.imgs[counter]}></img><button onClick={up}>Right</button>
        </div>
    )
}

export default Carousel;