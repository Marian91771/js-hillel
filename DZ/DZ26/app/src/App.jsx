import { useEffect, useState } from "react"
import ContactsList from './components/contactsList';
import AddContact from './components/addContact';
import './App.css';


function App() {
  const [activePage, setActivePage] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    async function sendRequest() {
      const result = await fetch('/contacts.json');
      const response = await result.json();
      setContacts(response);
    }

    sendRequest();
  }, []);

  // const handleAdd = (firstName, lastName, phone) => {
  //   const newContact = {
  //     id: Date.now(),
  //     firstName: firstName,
  //     lastName: lastName,
  //     phone: phone
  //   };

  //   const updatedContacts = [...contacts, newContact];

  //   setContacts(updatedContacts);
  //   setActivePage('ContactsList')

  // }

  const handleAddorUppdate = (firstName, lastName, phone) => {
    if (contactToEdit) {
      const updatedContacts = contacts.map(contact => {
        if (contact.id === contactToEdit.id) {
          return {
            ...contact,
            firstName: firstName,
            lastName: lastName,
            phone: phone
          };
        } else {
          return contact;
        }
      });

      setContacts(updatedContacts);
      setContactToEdit(null);
    } else {
      const newContact = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        phone: phone
      };

      const updatedContacts = [...contacts, newContact];

      setContacts(updatedContacts);
    }
    setActivePage('ContactsList');
  }

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    setActivePage('AddContact');
  };

  const onCancel = () => {
    setContactToEdit(null);
    setActivePage('ContactsList');
  }

  return (
    <>
      <div className="buttons">
        <button onClick={() => {
          setActivePage('ContactsList')
          setContactToEdit(null);
        }
        }>Contacts</button>
        <button onClick={() => setActivePage('AddContact')}>Add Contact</button>
      </div>

      {activePage === 'ContactsList' &&
        <ContactsList
          contacts={contacts}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      }
      {activePage === 'AddContact' &&
        <AddContact
          onAdd={handleAddorUppdate}
          contactToEdit={contactToEdit}
          onCancel={onCancel}
        />
      }
    </>
  );
}

export default App;
