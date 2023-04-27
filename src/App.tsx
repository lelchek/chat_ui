import { useBreakpoint } from 'hooks';
import Menu from 'components/Menu';
import ChatList from 'components/ChatList';
import СhatContainer from 'components/СhatContainer';
import styles from './App.module.scss';

const App = () => {
  const { isDesktop } = useBreakpoint();
  return (
    <main className={styles.root}>
      {isDesktop && (
        <>
          <Menu />
          <ChatList />
        </>
      )}
      <СhatContainer />
    </main>
  );
};

export default App;
