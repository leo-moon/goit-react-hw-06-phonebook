// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';

// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
// import findCntct from '../../components/findCntct';
import Button from 'Modules/Button/Button';

import { addContact, deleteContact, filterContacts } from 'redux/actions';
import { getFilter, getFilterContacts } from '../../redux/selectors';

const Phonebook = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('phonebook'));
  //   return contacts ? contacts : [];
  // });
  
  const contactsFilter = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('phonebook', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    //friends
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
  };

  const isDublicate = name => {
    const nameLower = name.toLowerCase();
    const dublicate = contactsFilter.find(
      contact => contact.name.toLowerCase() === nameLower
    );
    return Boolean(dublicate);
  };

  const removeContact = id => {
    dispatch(deleteContact({ id }));
  };

  const handleFilter = ({ target }) => {
    dispatch(filterContacts(target.value));
  };
  console.log(filter);
  const elementsLi = contactsFilter.map(({ id, name, number }) => (
    <li className={styles.li} key={id}>
      <div>
        {name} : {number}
      </div>
      <Button removeContact={removeContact} id={id} />
    </li>
  ));
  const elements =
    elementsLi && elementsLi.length
      ? elementsLi
      : 'Sorry, there are no contacts in Phonebook';
  return (
    <>
      <div className={styles.div}>
        <h3 className={styles.mainTitle}>Phonebook</h3>
        <ContactForm onSubmit={handleAddContact} />

        <h3 className={styles.mainTitle}>Contacts</h3>
        <div className={styles.find}>
          <FindContact handleFilter={handleFilter} />
          <ul>{elements}</ul>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
