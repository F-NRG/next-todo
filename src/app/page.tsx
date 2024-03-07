import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: 'blue',
    border: 'none',
    padding: '.5rem 1rem',
    borderRadius: '.5rem',
    color: 'white',
  },
});

export default function Home() {
  return (
    <main>
      <h1>Welkom bij deze basic todo app!</h1>
      <form>
        <input type="text" />
        <button
          {...stylex.props(styles.button)}
          type="submit"
        >
          Toevoegen
        </button>
      </form>
    </main>
  );
}
