function findRating(props){
    switch(Math.round(props.value)){
        case 0:
            return <p>☆☆☆☆☆</p>;
        case 1:
            return <p>★☆☆☆☆</p>;
        case 2:
            return <p>★★☆☆☆</p>;
        case 3:
            return <p>★★★☆☆</p>;
        case 4:
            return <p>★★★★☆</p>;
        case 5:
            return <p>★★★★★</p>;
    }
}

function Rating(props) {
    return (
        <div>
            {findRating(props)}
        </div>
    )
}

export default Rating;