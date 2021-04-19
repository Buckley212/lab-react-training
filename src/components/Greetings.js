function detectLanguage(props){
    const hello = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hello'
    };
    switch(props.lang){
        case 'de':
            return `${hello.de} ${props.name}`;
        case 'fr':
            return `${hello.fr} ${props.name}`;
        case 'es':
            return `${hello.es} ${props.name}`;
        case 'en':
            return `${hello.en} ${props.name}`;
        default: return  `Hello ${props.name}`;
    }
}

function Greetings(props) {
    return (
        <greet className="box">
            <section>
                <p>{detectLanguage(props)}</p>
            </section>
        </greet>
    )
} 

export default Greetings;