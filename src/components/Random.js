function Random(props) {
    return (
    <section class="box">
        <p>Random value bewteen ${props.min} and ${props.max} => ${Math.ceil(Math.random()*props.max)}</p>
    </section>
    )
}

export default Random;