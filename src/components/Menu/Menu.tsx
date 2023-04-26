import logo from 'images/logo-ninja.png';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.root}>
      <img className={styles.logo} src={logo} />
    </div>
  );
};

export default Menu;
