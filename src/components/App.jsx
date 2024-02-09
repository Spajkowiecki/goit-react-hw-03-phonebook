import { Component } from 'react';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

//styles
import style from './App.module.css';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Jan Kowalski',
        phone: '+48 123 456 789',
        email: 'jan.kowalski@email.pl',
      },
      {
        name: 'Anna Kowalska',
        phone: '+48 987 654 321',
        email: 'anna.kowalska@email.pl',
      },
      {
        name: 'Tomasz Nowak',
        phone: '+48 555 123 456',
        email: 'tomasz.nowak@email.pl',
      },
      {
        name: 'Katarzyna Nowak',
        phone: '+48 777 888 999',
        email: 'katarzyna.nowak@email.pl',
      },
      {
        name: 'Michał Wiśniewski',
        phone: '+48 222 333 444',
        email: 'michal.wisniewski@email.pl',
      },
      {
        name: 'Agnieszka Wiśniewska',
        phone: '+48 666 555 666',
        email: 'agnieszka.wisniewska@email.pl',
      },
      {
        name: 'Krzysztof Kwiatkowski',
        phone: '+48 333 444 555',
        email: 'krzysztof.kwiatkowski@email.pl',
      },
      {
        name: 'Małgorzata Kwiatkowska',
        phone: '+48 888 999 000',
        email: 'malgorzata.kwiatkowska@email.pl',
      },
      {
        name: 'Wojciech Adamski',
        phone: '+48 444 555 666',
        email: 'wojciech.adamski@email.pl',
      },
      {
        name: 'Ewa Karolak',
        phone: '+48 233 101 303',
        email: 'ewa.karolak@email.pl',
      },
      {
        name: 'Mirosław Piwny',
        phone: '+48 139 999 223',
        email: 'mirek.piwny@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
      {
        name: 'Ewa Adamska',
        phone: '+48 101 202 303',
        email: 'ewa.adamska@email.pl',
      },
    ],
    name: '',
    number: '',
    filter: '',
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={style.App}>
        <h2 className={style.title}>PHONEBOOK</h2>
        <div className={style.content}>
          <Section name="Controls">
            <ContactForm onSubmit={values => console.log(values)} />
          </Section>
          <Section name="Contacts">
            <Filter />
            <ContactList contacts={contacts} />
          </Section>
          {/* <Section name="Controls">
            <div className={style.controls}>
              <ContactForm onSubmit={values => console.log(values)} />
            </div>
          </Section>
          <Section name="Contact List">

          </Section> */}
        </div>
      </div>
    );
  }
}

export default App;
