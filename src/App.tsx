import Menu from 'components/Menu';
import ChatList from 'components/ChatList';
import styles from './App.module.scss';

const App = () => {
  return (
    <main className={styles.root}>
      <Menu />

      <ChatList />
    </main>
  );
};

export default App;
