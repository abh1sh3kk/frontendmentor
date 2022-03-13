import React from 'react';
import styles from './attribution.module.scss';

interface Props {
  name: string;
}

export const Attribution = ({ name }: Props) => {
  return (
    <div className={styles.attribution}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">{name}</a>.
    </div>
  );
};
