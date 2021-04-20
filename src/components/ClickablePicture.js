import { useState } from 'react';

const ClickablePicture = props => {

    const [picture, setPicture] = useState(false);
    const change = e => picture ? setPicture(false) : setPicture(true);

    return (
        <div>
            {picture ? <img src={props.img} onClick={change}></img> : <img src={props.imgClicked} onClick={change}></img>}
        </div>
    )
}

export default ClickablePicture;