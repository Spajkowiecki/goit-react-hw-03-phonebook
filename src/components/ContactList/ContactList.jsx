import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactList.module.css';

import Contact from '../Contact/Contact';

class ContactList extends Component {
  handleRemove = element => {
    this.props.remove(element);
  };
  render() {
    const { contacts } = this.props;
    return (
      <ul className={style.list}>
        {contacts.map(element => {
          return (
            <li key={nanoid()}>
              <Contact contact={element} />
              <button onClick={() => this.handleRemove(element)}>remove</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
