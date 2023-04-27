import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { LINE_HEIGHT } from 'constants/sizes';

import { AnimatedTextProps } from './types';
import styles from './AnimatedText.module.scss';

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [startAnimate, setStartAnimate] = useState<boolean>(false);
  const [maskRows, setMaskRows] = useState<number>(1);

  const [animatedSecondRow, setAnimatedSecondRow] = useState<boolean>(false);
  const [animatedThirdRow, setAnimatedThirdRow] = useState<boolean>(false);

  const [animatedRowNumber, setAnimatedRowNumber] = useState<number>(1);

  useEffect(() => {
    if (!startAnimate) {
      return;
    }

    const timeout = setTimeout(() => {
      setAnimatedSecondRow(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [startAnimate]);

  useEffect(() => {
    if (!animatedSecondRow) {
      return;
    }

    const timeout = setTimeout(() => {
      setAnimatedThirdRow(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [animatedSecondRow]);

  useEffect(() => {
    const startAnimateTimeout = setTimeout(() => {
      setStartAnimate(true);
    }, 1700);

    const maskRowsTimeout = setTimeout(() => {
      const scrollHeight = textRef.current?.scrollHeight;

      const rows = scrollHeight ? scrollHeight / LINE_HEIGHT : 1;

      setMaskRows(rows > 3 ? 3 : rows);
    }, 1600);

    return () => {
      clearTimeout(startAnimateTimeout);
      clearTimeout(maskRowsTimeout);
    };
  }, []);

  return (
    <div className={styles.root}>
      <p
        className={cn(styles.text, { [styles.visible]: startAnimate })}
        ref={textRef}
      >
        {text}

        <span
          className={styles.staticMask}
          style={{
            height: LINE_HEIGHT * (maskRows - animatedRowNumber + 1),
            top: LINE_HEIGHT * (animatedRowNumber - 1),
          }}
        />

        <span className={styles.animatedMmask}>
          {Array.from({ length: maskRows }, (_, index) => {
            return (
              <CSSTransition
                key={index}
                in={
                  index === 0
                    ? startAnimate
                    : index === 1
                    ? animatedSecondRow
                    : animatedThirdRow
                }
                timeout={3000 * maskRows}
                classNames={{
                  enter: styles.gradientMaskEnter,
                  enterActive: styles.gradientMaskEnterActive,
                }}
                unmountOnExit
                onEnter={() => setAnimatedRowNumber(index + 2)}
              >
                <span className={styles.gradientMask} />
              </CSSTransition>
            );
          })}
        </span>
      </p>
    </div>
  );
};

export default AnimatedText;
