import Rating from './Rating';

function DriverCard(props){
    return (
        <driver class="driveCard">
            <img src={props.img}></img>
            <div>
                <h3>{props.name}</h3>
                <Rating value={props.rating} />
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </driver>
    )
}

export default DriverCard;
