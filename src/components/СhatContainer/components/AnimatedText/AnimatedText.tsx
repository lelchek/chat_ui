import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { getTextMaxHeight } from 'helpers';
import { BASE_LINE_HEIGHT, BACKGROUND_ANIMATE_TIME } from 'constants/general';
import { AnimatedTextProps } from './types';
import styles from './AnimatedText.module.scss';

const AnimatedText = ({
  text,
  setMoreVisible,
  onFinished,
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const [maskRows, setMaskRows] = useState<number>(1);
  const [animatedRowNumber, setAnimatedRowNumber] = useState<number>(0);

  useEffect(() => {
    const maskRowsTimeout = setTimeout(() => {
      const textHeight = textRef.current?.scrollHeight;

      const rows = textHeight ? textHeight / BASE_LINE_HEIGHT : 1;

      setMaskRows(rows > 3 ? 3 : Math.ceil(rows));

      if (textHeight && textHeight > getTextMaxHeight()) {
        setMoreVisible(true);
      }
    }, BACKGROUND_ANIMATE_TIME);

    const startAnimateTimeout = setTimeout(() => {
      setAnimatedRowNumber(1);
    }, BACKGROUND_ANIMATE_TIME + 100);

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
