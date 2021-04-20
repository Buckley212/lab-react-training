import profiles from '../data/berlin.json';

const FaceBook = () => {
    return profiles.map(eachProfile => {
        return (
            <div className="IdCard">
                <img src={eachProfile.img}></img>
                <div>
                    <p><b>First Name:</b> {eachProfile.firstName}</p>
                    <p><b>Last Name:</b> {eachProfile.lastName}</p>
                    <p><b>Country:</b> {eachProfile.country}</p>
                    <p><b>Type:</b> {eachProfile.isStudent? 'Student' : 'Teacher'}</p>
                </div>
            </div>
        )
    })
}

export default FaceBook;