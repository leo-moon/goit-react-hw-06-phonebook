import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

import Phonebook from '../Modules/Phonebook/Phonebook';


import configureStore from '../redux/store';

export function App() {
  return (
    <>
      <Provider store={configureStore}>
        {/* <BrowserRouter> */}
          <Phonebook />
        {/* </BrowserRouter> */}
      </Provider>
    </>
  );
}
