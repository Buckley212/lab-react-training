function BoxColor(props){
    const boxColor = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }
    return (
        <div style={boxColor} className="Color box">
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;