'use client';

import * as stylex from '@stylexjs/stylex';
import type { CompiledStyles } from '@stylexjs/stylex/lib/StyleXTypes';
import type { FC } from 'react';

const styles = stylex.create({
  button: {
    backgroundColor: { 'default': '#efa7a7ff', ':hover': '#fcbcb8ff' },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#efa7a7ff',
    padding: '.5rem 1rem',
    borderRadius: '.2rem',
    color: 'white',
    cursor: 'pointer',
  },
});

type Props = {
  value?: string;
  style?: CompiledStyles;
  text?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ name = 'button-el', value = '', text = 'button', type = 'button', onClick, style }) => {
  return (
    <button
      {...stylex.props(styles.button, style)}
      value={value}
      type={type}
      name={name}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
