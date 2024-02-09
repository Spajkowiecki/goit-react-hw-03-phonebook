import { Component } from 'react';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
//styles
import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  /**
   *  after componentMount check if in localStorage is something saved
   * YES: load data,
   * NO: user must create his own data
   */

  addContact = contact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = contact => {
    const { contacts } = this.state;
    const { id } = contact;
    this.setState({
      contacts: contacts.filter(element => element.id !== id),
    });
  };

  handleFiltering = filter => {
    this.setState({ filter: filter });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={style.App}>
        <h2 className={style.title}>PHONEBOOK</h2>
        <div className={style.content}>
          <Section name="Controls">
            <ContactForm onSubmit={this.addContact} />
          </Section>
          <Section name="Contacts">
            <Filter filter={this.handleFiltering} />
            <ContactList contacts={contacts} remove={this.removeContact} />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
