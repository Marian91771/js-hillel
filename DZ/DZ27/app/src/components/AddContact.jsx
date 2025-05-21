import { useContext, useEffect, useRef, useState } from "react";
import "./AddContact.css";
import LanguageContext from "../LanguageContext";

export default function AddContact({ onAdd, contactToEdit, onCancel }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const language = useContext(LanguageContext);

    useEffect(() => {
        if (contactToEdit) {
            setFirstName(contactToEdit.firstName);
            setLastName(contactToEdit.lastName);
            setPhone(contactToEdit.phone);
        }
    }, [contactToEdit]);


    const handleFirstNameChange = event => {
        const userValue = event.target.value;
        let newValue = userValue;

        if (userValue.length === 1) {
            newValue = userValue.toUpperCase();
        }

        setFirstName(newValue);
    };

    const handleLastNameChange = event => {
        const userValue = event.target.value;
        let newValue = userValue;

        if (userValue.length === 1) {
            newValue = userValue.toUpperCase();
        }

        setLastName(newValue);
    };

    const handleNumberChange = event => {
        const userValue = event.target.value;
        const userKey = event.nativeEvent.inputType;
        let newValue = userValue;

        if (userKey !== 'deleteContentBackward') {
            if (userValue.length === 1 && userValue !== '+') {
                newValue = `+${userValue}`;
            } else if (userValue.length === 3) {
                newValue = `${userValue} (`;
            } else if (userValue.length === 8) {
                newValue = `${userValue}) `;
            } else if (userValue.length === 13 || userValue.length === 16) {
                newValue = `${userValue}-`;
            } else if (userValue.length > 19) {
                return;
            }
        }

        if (!newValue.match(/^[0-9-\(\)\+ ]{0,19}$/)) {
            return;
        }

        setPhone(newValue);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(firstName, lastName, phone);
        onAdd(firstName, lastName, phone);
    };

    return (
        <>
            <h3>{contactToEdit ? 'Edit' : 'Add Contact'}</h3>
            <form className="add-contact-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">{language.value === 'EN' ? 'First Name' : 'Ім`я'}</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />

                <label htmlFor="lastName">{language.value === 'EN' ? 'Last Name' : 'Прізвище'}</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />

                <label htmlFor="phone">{language.value === 'EN' ? 'Phone' : 'Номер телефону'}</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={handleNumberChange} />

                <div className="formButtons">
                    <button type="submit">
                        {contactToEdit ? (language.value === 'EN' ? 'Edit' : 'Редагувати') : (language.value === 'EN' ? 'Add' : 'Додати')}
                    </button>
                    <button type="button" onClick={onCancel}>{language.value === 'EN' ? 'Cancel' : 'Відмінити'}</button>
                </div>
            </form>
        </>
    );
}
