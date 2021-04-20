const detectLanguage = a =>{
    switch(a){
        case 'de':
            return `Hallo `;
        case 'fr':
            return `Bonjour `;
        case 'es':
            return `Hola `;
        case 'en':
            return `Hello `;
    }
}


const Greetings = props => {
    let input = props.lang;
    return (
        <greet className="box">
            <section>
                <p>{detectLanguage(input)}{props.name}</p>
            </section>
        </greet>
    )
} 

export default Greetings;