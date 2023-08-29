import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.header}>
      <NewsBanner />
    </main>
  );
};

export default Main;
