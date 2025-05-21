import './ContactsList.css'
import LanguageContext from '../LanguageContext';
import { useContext } from 'react';

export default function ContactsList({contacts, onDelete, onEdit}) {

    const language = useContext(LanguageContext)

    return (
        <div className="contactsList">
            <h3>{language.value === 'EN' ? 'Contacts' : 'Контакти'}</h3>
            <table  cellPadding="5">
                <thead>
                    <tr>    
                        <th>{language.value === 'EN' ? 'First Name' : 'Ім`я'}</th>
                        <th>{language.value === 'EN' ? 'Last Name' : 'Прізвище'}</th>
                        <th>{language.value === 'EN' ? 'Phone' : 'Номер телефону'}</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td><button onClick={() => onDelete(contact.id)}>{language.value === 'EN' ? 'Delete' : 'Видалити'}</button></td>
                            <td><button onClick={() => onEdit(contact)}>{language.value === 'EN' ? 'Edit' : 'Редагувати'}</button></td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
}
