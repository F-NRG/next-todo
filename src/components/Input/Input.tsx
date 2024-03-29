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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  text?: string;
  value?: string;
};

const Input: FC<Props> = ({ name = 'input-field', placeholder = 'placeholder', onChange, value, required = true }) => {
  return (
    <input
      {...stylex.props(styles.input)}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
