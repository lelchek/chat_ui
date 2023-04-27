import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import { ReactComponent as Send } from 'images/icons/send.svg';
import { ReactComponent as Close } from 'images/icons/close.svg';
import styles from './Icon.module.scss';

const ICON_NAMES = {
  send: Send,
  close: Close,
};

type IconName = keyof typeof ICON_NAMES;

interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  name: IconName;
}

const Icon = ({ name, className, ...rest }: IconProps) => {
  const SvgTag = ICON_NAMES[name] as unknown as 'svg';

  return (
    <SvgTag
      className={cn(styles.root, className)}
      data-icon-name={name}
      aria-hidden="true"
      role="presentation"
      focusable="false"
      {...rest}
    />
  );
};

export default Icon;
