import { Component } from 'react';
import style from './Contact.module.css';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className={style.contact}>
        <div className={style.upper}>
          <p>{contact.name}</p>
        </div>
        <div className={style.bottom}>
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
        </div>
      </div>
    );
  }
}

export default Contact;
