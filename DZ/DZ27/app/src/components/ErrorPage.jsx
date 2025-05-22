import { useContext } from "react"
import { Link } from 'react-router-dom';
import LanguageContext from "../LanguageContext"

export default function ErrorPage() {

    const language = useContext(LanguageContext);

    return (
        <>
            <h2>{language.value === 'EN' ? 'You are not logged in' : 'Ви не увійшли в систему'}</h2>
            <Link to="/login">{language.value === 'EN' ? 'Login' : 'Увійти'}</Link>
        </>
    )
}