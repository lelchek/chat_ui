import cn from 'classnames';
import { TypingIndicatiorProps } from './types';
import styles from './TypingIndicatior.module.scss';

const TypingIndicatior = ({ size = 'medium' }: TypingIndicatiorProps) => {
  return (
    <ul className={cn(styles.root, styles[size])}>
      {Array.from({ length: 3 }, (_, index) => (
        <li className={styles.item} key={index}>
          <span className={styles.dot}>.</span>
        </li>
      ))}
    </ul>
  );
};

export default TypingIndicatior;
