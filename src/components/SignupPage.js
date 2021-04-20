import { useState } from 'react';

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


const SignupPage = () => {
    const [language, setLanguage] = useState('');
    const langVal = e => setLanguage(e.target.value); 
    return (
        <form>
            <label for="email">Email: </label>
                <input type="email" id="email" name="email" required></input>
            <label for="pwd">Password: </label>
                <input type="pasword" id="pwd" required></input>
            <label for="lang">Nationality: </label>
                <input type="text" id="lang" name="lang" onChange={langVal} required></input>
            {language === '' ? <p></p> : <p>{detectLanguage(language)}</p>}
            <p></p>
        </form>
    )
}

export default SignupPage;