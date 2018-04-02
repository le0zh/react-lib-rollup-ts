import React, { Component } from 'react';
import style from './style.css';

export interface IProps {
  text?: string;
}

export default class ExampleComponent extends Component<IProps> {
  render() {
    const { text } = this.props;

    return <div className={style.test}>Example Component2: {text}</div>;
  }
}
