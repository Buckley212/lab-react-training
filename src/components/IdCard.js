function IdCard(props) {
    return (
        <section>
            <card className='IdCard'>
                <img src={props.picture} alt="guy"></img>
                <div>
                    <p><b>First Name:</b> {props.firstName}</p>
                    <p><b>Last Name:</b> {props.lastName}</p>
                    <p><b>Gender:</b> {props.gender}</p>
                    <p><b>Height:</b> {props.height/100}m</p>
                    <p><b>Birth:</b> {props.birth.toDateString()}</p>
                </div>
            </card>
        </section>
    )
}

export default IdCard