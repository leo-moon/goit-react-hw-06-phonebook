import { Provider } from 'react-redux';

import Phonebook from '../Modules/Phonebook/Phonebook';
import configureStore from '../redux/store';

export function App() {
  return (
    <>
      <Provider store={configureStore}>
          <Phonebook />
      </Provider>
    </>
  );
}
