import Menu from 'components/Menu';
import ChatList from 'components/ChatList';
import СhatContainer from 'components/СhatContainer';
import styles from './App.module.scss';

const App = () => {
  return (
    <main className={styles.root}>
      <Menu />
      <ChatList />
      <СhatContainer />
    </main>
  );
};

export default App;
