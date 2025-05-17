import './ContactsList.css'

export default function ContactsList({contacts, onDelete, onEdit}) {

    return (
        <div className="contactsList">
            <h3>Contacts</h3>
            <table  cellPadding="5">
                <thead>
                    <tr>    
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td><button onClick={() => onDelete(contact.id)}>Delete</button></td>
                            <td><button onClick={() => onEdit(contact)}>Edit</button></td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
}
