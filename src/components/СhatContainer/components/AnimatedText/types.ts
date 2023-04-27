export interface AnimatedTextProps {
  text: string;
  onFinished: () => void;
  setMoreVisible: (value: boolean) => void;
}
