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
          <p className={style.data}>
            <span>Phone: </span>
            <span>{contact.phone}</span>
          </p>
          <p className={style.data}>
            <span>Email: </span>
            <span>{contact.email}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
