import { useContext, useRef, useState } from "react"
import LanguageContext from "../LanguageContext"
import './LoginPage.css'

export default function LoginPage ({onAuth}) {
    
    const language = useContext(LanguageContext);
    const [error, setError] = useState(false);
    const userNameRef = useRef('');
    const passwordRef = useRef('');

    const loginCeds = {
        userName: 'admin',
        password: 'admin'
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if (userNameRef.current.value === loginCeds.userName && passwordRef.current.value === loginCeds.password){
            console.log(true)
            setError(false)
            onAuth()
        } else {
            console.log(false)
            setError(true)
        }
    }

    return(
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="userName">{language.value === 'EN' ? 'User Name' : 'Ім`я користувача'}</label>
                <input type="text" id="userName" ref={userNameRef}/>

                <label htmlFor="password">{language.value === 'EN' ? 'Password' : 'Пароль'}</label>
                <input type="password" id="password" ref={passwordRef}/>

                <button type="submit">{language.value === 'EN' ? 'Login' : 'Увійти'}</button>
            </form>
            {error && <h2 className="errorMassage">{language.value === 'EN' ? 'Access is denied' : 'Доступ заборонено'}</h2>}

        </>
    )
}