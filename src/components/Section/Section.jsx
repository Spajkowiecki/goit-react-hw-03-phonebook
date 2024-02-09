import { Component } from 'react';
import style from './Section.module.css';

class Section extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <section className={style.section}>
        <h2>{name}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
