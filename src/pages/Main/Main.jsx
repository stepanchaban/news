import { useEffect } from 'react';
import getNews from '../../api/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';

const Main = () => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.header}>
      <NewsBanner />
    </main>
  );
};

export default Main;
