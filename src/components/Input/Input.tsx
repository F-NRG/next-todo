'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

const styles = stylex.create({
  input: {
    backgroundColor: 'white',
    borderTop: '1px solid #efa7a7ff',
    borderBottom: '1px solid #efa7a7ff',
    borderLeft: '1px solid #efa7a7ff',
    borderRight: '1px solid #efa7a7ff',
    padding: '.5rem 1rem',
    borderRadius: '.2rem',
    flexGrow: 1,
    // ':focus-visible': {
    //   outline: 'none',
    //   boxShadow: '0 0 0 3px #efa7a7ff',
    // },
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
