// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
import findCntct from '../../components/findCntct';
import Button from 'Modules/Button/Button';

import { addContact, deleteContact } from 'redux/actions';
import {getAllContacts} from '../../redux/selectors'

const Phonebook = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('phonebook'));
  //   return contacts ? contacts : [];
  // });
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(store => store.filter);

  // console.log('Phonebook 20 ', contacts);

  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    //friends
    // if (isDublicate(name)) {
    //   return alert(`${name} is already in contacts`);
    // }

    const action = addContact({ name, number });
    dispatch(action);
  };

  // const isDublicate = name => {
  //   const nameLower = name.toLowerCase();
  //   const dublicate = contacts.find(
  //     contact => contact.name.toLowerCase() === nameLower
  //   );
  //   return Boolean(dublicate);
  // };

  const removeContact = id => {
    const action = deleteContact({ id });
    dispatch(action);
  };

  // const handleFilter = ({ target }) => {
  //   setFilter(() => {
  //     return target.value;
  //   });
  // };

  const contactsFilter = findCntct(filter, contacts);
  const elementsLi = contactsFilter.map(({ id, name, number }) => (
    <li className={styles.li} key={id}>
      <div>
        {name} : {number}
      </div>
      <Button removeContact={removeContact} id={id} />

      {/* <button
        onClick={() => removeContact(id)}
        className={`${styles.btn} ${styles.deleteBtn}`}
        type="button"
      >
        Delete
      </button> */}
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
          <FindContact />
          <ul>{elements}</ul>
        </div>
      </div>
    </>
  );
};

export default Phonebook;

//  return (
//     <>
//       <div className={styles.div}>
//         <h3 className={styles.mainTitle}>Phonebook Form</h3>

//         <ContactForm onSubmit={addContact} />
//         <h3 className={styles.mainTitle}>Contacts</h3>
//         <div className={styles.find}>
//           <FindContact handleFilter={handleFilter} />
//           <ul>{elementsLi}</ul>
//         </div>
//       </div>
//     </>
//   );
// };
