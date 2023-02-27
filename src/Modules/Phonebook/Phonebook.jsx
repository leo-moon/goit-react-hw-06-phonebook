import { useSelector, useDispatch } from 'react-redux';

import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
import Button from 'Modules/Button/Button';

import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { filterContacts } from 'redux/filter/filter-actions';

import {
  getAllContacts,
  getFilterContacts,
} from '../../redux/contacts/contacts-selectors';

import { getFilter } from '../../redux/filter/filter-selectors';

const Phonebook = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('phonebook'));
  //   return contacts ? contacts : [];
  // });

  const contactsFilter = useSelector(getFilterContacts);
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('phonebook', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    //----------------------  add friends filter ???
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
  };

  const isDublicate = name => {
    const nameLower = name.toLowerCase();
    const dublicate = contacts.find(
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
