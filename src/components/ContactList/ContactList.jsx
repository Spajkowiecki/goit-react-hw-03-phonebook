import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactList.module.css';

import Contact from '../Contact/Contact';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <ul className={style.list}>
        {contacts.map(element => {
          return (
            <li key={nanoid()}>
              <Contact contact={element} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
