import { Component } from 'react';
import style from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <input
        className={style.filter}
        type="text"
        placeholder="search for contact"
      ></input>
    );
  }
}

export default Filter;
