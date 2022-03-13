import { Advice } from './components/advice/advice';
import { Attribution } from './components/attribution/attribution';
import styles from './App.module.scss';

function App() {
  document.body.className = styles.body;

  return (
    <div className={styles.App}>
      <Advice />
      <Attribution name="Ranjan Ojha" />
    </div>
  );
}

export default App;
