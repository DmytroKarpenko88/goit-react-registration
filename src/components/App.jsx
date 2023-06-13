import { ContainerStyled } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Switch } from '@mui/material';
import SearchAppBar from './Header/AppBar/AppBar';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <SearchAppBar />

        <Switch>
          <Route />
        </Switch>

        {/* <ContainerStyled>
          <h2>Phonebook</h2>

          <ContactForm />
        </ContainerStyled>

        <ContainerStyled>
          <h2>Contacts</h2>

          <Filter />
          <ContactList />
        </ContainerStyled> */}
      </Container>
    </>
  );
};

export default App;
