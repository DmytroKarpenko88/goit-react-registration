import { ContainerStyled } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Switch } from '@mui/material';
import SearchAppBar from './Header/AppBar/AppBar';
import { Route } from 'react-router-dom';
import HomeView from 'views/HomeViews';
import RegisterView from 'views/RegisterViews';
import LoginView from 'views/LoginViews';
import TodosView from 'views/TodosViews';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container maxWidth="lg">
        <SearchAppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/todos" component={TodosView} />
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
