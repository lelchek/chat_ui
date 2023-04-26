import { useMemo } from 'react';
import { AvatarProps } from './types';
import styles from './Avatar.module.scss';

const Avatar = ({ image, name, lastName }: AvatarProps) => {
  const initials = useMemo(
    () => `${name[0]}${lastName ? lastName[0] : ''}`,
    [name, lastName]
  );

  return (
    <div className={styles.root}>
      {image ? (
        <img className={styles.image} src={image} />
      ) : (
        <p className={styles.initials}>{initials}</p>
      )}
    </div>
  );
};

export default Avatar;
