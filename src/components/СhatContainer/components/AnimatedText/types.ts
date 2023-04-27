export interface AnimatedTextProps {
  text: string;
  onSetExpectedTextHeight: (value: number) => void;
  onFinished: () => void;
}
