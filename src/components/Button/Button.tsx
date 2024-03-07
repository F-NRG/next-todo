'use client';

import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

const styles = stylex.create({
  button: {
    backgroundColor: { 'default': '#efa7a7ff', ':hover': '#fcbcb8ff' },
    border: '1px solid #efa7a7ff',
    padding: '.5rem 1rem',
    borderRadius: '.2rem',
    color: 'white',
    cursor: 'pointer',
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
