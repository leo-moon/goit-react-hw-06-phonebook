import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
import findCntct from '../../components/findCntct';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('phonebook'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(() => {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      return [...contacts, newContact];
    });
  };

  const isDublicate = name => {
    const nameLower = name.toLowerCase();
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === nameLower
    );
    return Boolean(dublicate);
  };

  const removeContact = id => {
    const newList = contacts.filter(contact => contact.id !== id);
    setContacts(() => {
      return [...newList];
    });
  };

  const handleFilter = ({ target }) => {
    setFilter(() => {
      return target.value;
    });
  };

  const contactsFilter = findCntct(filter, contacts);
  const elementsLi = contactsFilter.map(({ id, name, number }) => (
    <li className={styles.li} key={id}>
      <div>
        {name} : {number}
      </div>
      <button
        onClick={() => removeContact(id)}
        className={`${styles.btn} ${styles.deleteBtn}`}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <div className={styles.div}>
        <h3 className={styles.mainTitle}>Phonebook Form</h3>

        <ContactForm onSubmit={addContact} />
        <h3 className={styles.mainTitle}>Contacts</h3>
        <div className={styles.find}>
          <FindContact handleFilter={handleFilter} />
          <ul>{elementsLi}</ul>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
