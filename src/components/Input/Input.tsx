'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

const styles = stylex.create({
  input: {
    backgroundColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#efa7a7ff',
    padding: '.5rem 1rem',
    borderRadius: '.2rem',
    flexGrow: 1,
    outline: { 'default': null, ':focus-visible': 'none' },
    boxShadow: { 'default': null, ':focus-visible': '0 0 0 2px #efa7a7ff' },
  },
});

type Props = {
  name?: string;
  value?: string;
  text?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ name = 'input-field', placeholder = 'placeholder', onChange }) => {
  return (
    <input
      {...stylex.props(styles.input)}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
