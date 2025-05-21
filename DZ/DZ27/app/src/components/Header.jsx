import { useContext } from "react"
import { Link } from 'react-router-dom';
import LanguageContext from "../LanguageContext";
import ThemContext from "../ThemContext";

export default function Header() {

    const language = useContext(LanguageContext);
    const them = useContext(ThemContext);

    const onSelectLanguage = (event) => {
        language.change(event.target.value)
        console.log(event.target.value)
    }

    const onSelectThem = (event) => {
        them.change(event.target.value)
        console.log(event.target.value)
    }

    return (
        <header>
            <Link to="/">{language.value === 'EN' ? 'Contacts List' : 'Список контактів'}</Link> | <Link to="/add">{language.value === 'EN' ? 'Add Contact' : 'Додати до контактів'}</Link>
            <select onChange={onSelectLanguage}>
                <option value="EN">{language.value === 'EN' ? 'English' : 'Англійська'}</option>
                <option value="UA">{language.value === 'EN' ? 'Ukrainian' : 'Українська'}</option>
            </select>
            <select onChange={onSelectThem}>
                <option value="dark">{language.value === 'EN' ? 'Dark' : 'Темна'}</option>
                <option value="light">{language.value === 'EN' ? 'Light' : 'Світла'}</option>
            </select>
        </header>
    )
}