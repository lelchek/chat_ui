import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { BASE_LINE_HEIGHT, BACKGROUND_ANIMATE_TIME } from 'constants/general';
import { AnimatedTextProps } from './types';
import styles from './AnimatedText.module.scss';

const AnimatedText = ({ text, onFinished }: AnimatedTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const [maskRows, setMaskRows] = useState<number>(1);
  const [animatedRowNumber, setAnimatedRowNumber] = useState<number>(0);

  useEffect(() => {
    const maskRowsTimeout = setTimeout(() => {
      const scrollHeight = textRef.current?.scrollHeight;

      const rows = scrollHeight ? scrollHeight / BASE_LINE_HEIGHT : 1;

      setMaskRows(Math.ceil(rows));
    }, BACKGROUND_ANIMATE_TIME + 100);

    const startAnimateTimeout = setTimeout(() => {
      setAnimatedRowNumber(1);
    }, BACKGROUND_ANIMATE_TIME + 200);

    return () => {
      clearTimeout(startAnimateTimeout);
      clearTimeout(maskRowsTimeout);
    };
  }, []);

  return (
    <div className={styles.root}>
      <p
        className={cn(styles.text, { [styles.visible]: animatedRowNumber > 0 })}
        ref={textRef}
      >
        {text}

        <span
          className={styles.staticMask}
          style={{
            height: BASE_LINE_HEIGHT * (maskRows - animatedRowNumber),
            top: BASE_LINE_HEIGHT * animatedRowNumber,
          }}
        />

        <span className={styles.animatedMmask}>
          {Array.from({ length: maskRows }, (_, index) => {
            const currentRowNumber = index + 1;

            return (
              <CSSTransition
                key={index}
                in={currentRowNumber === animatedRowNumber}
                timeout={3000}
                classNames={{
                  enter: styles.gradientMaskEnter,
                  enterActive: styles.gradientMaskEnterActive,
                }}
                onEntered={() => {
                  setAnimatedRowNumber(currentRowNumber + 1);

                  if (currentRowNumber === maskRows) {
                    onFinished();
                  }
                }}
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
