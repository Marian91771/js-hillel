import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import ContactsList from './components/contactsList';
import AddContact from './components/addContact';
import ErrorPage from './components/ErrorPage';
import LanguageContext from './LanguageContext';
import ThemContext from './ThemContext';
import Header from './components/Header';
import './App.css';
import LoginPage from './components/LoginPage';


function App() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [language, setLanguage] = useState('EN');
  const [them, setThem] = useState('dark');
  const [isAuth, setAuth] = useState(false);


  useEffect(() => {
    async function sendRequest() {
      const result = await fetch('/contacts.json');
      const response = await result.json();
      setContacts(response);
    }

    sendRequest();
  }, []);

  useEffect(() => {
    document.body.className = them;
  }, [them])

  // const handleAdd = (firstName, lastName, phone) => {
  //   const newContact = {
  //     id: Date.now(),
  //     firstName: firstName,
  //     lastName: lastName,
  //     phone: phone
  //   };

  //   const updatedContacts = [...contacts, newContact];

  //   setContacts(updatedContacts);
  //   navigate('/');

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
    navigate('/');
  }

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    navigate('/add');
  };

  const onCancel = () => {
    setContactToEdit(null);
    navigate('/');
  } 

  const onAuth = () => {
    setAuth(true)
  }

  return (
    <>
      <LanguageContext.Provider value={{ value: language, change: setLanguage }}>
        <ThemContext.Provider value={{ value: them, change: setThem }}>
          <div className={them === 'light' ? 'light' : 'dark'}>
            <Header />
            <Routes>
              {isAuth && <Route path='/' element={<ContactsList contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />} />}
              {isAuth && <Route path='/add' element={<AddContact onAdd={handleAddorUppdate} contactToEdit={contactToEdit} onCancel={onCancel} />} />}
              <Route path='/login' element={<LoginPage onAuth={onAuth}/>}/>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        </ThemContext.Provider>
      </LanguageContext.Provider>

    </>
  );
}

export default App;
