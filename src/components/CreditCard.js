
function cardType(props){
    switch(props.type){
        case "Visa":
            return "/img/visa.png"
        case "Master Card":
            return "/img/master-card.svg";
        default: return "/img/visa.png";
    }
}


function CreditCard(props){
    const creditStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
 return (
    <div style={creditStyle} class="card">
        <img src={cardType(props)} alt="type"></img>
        <p>{props.number}</p>
        <div>
            <p>{props.expirationMonth} / {props.expirationYear}</p>
            <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
  </div>
  )
}

export default CreditCard;