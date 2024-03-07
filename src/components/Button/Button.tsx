'use client';

import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

const styles = stylex.create({
  button: {
    backgroundColor: '#efa7a7ff',
    border: 'none',
    padding: '.5rem 1rem',
    borderRadius: '.2rem',
    color: 'white',
    // ':hover': {
    //   backgroundColor: '#fcbcb8ff',
    //   cursor: 'pointer',
    // },
  },
});

type Props = {
  value?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ value = '', text = 'button', type = 'button', onClick }) => {
  return (
    <button
      {...stylex.props(styles.button)}
      value={value}
      type={type}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
