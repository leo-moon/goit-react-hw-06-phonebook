// import { useSelector } from 'react-redux';

import styles from './find-contact.module.scss';

const FindContact = ({ handleFilter }) => {
  // const contacts = useSelector(store => store.contacts);
  // console.log(contacts);
  return (
    <div className={styles.block}>
      <label className={styles.title}>Find contacts by name</label>
      <input
        name="filter"
        onChange={handleFilter}
        placeholder="Name"
        type="text"
        className={styles.input} 
      />
    </div>
  );
};

export default FindContact;
