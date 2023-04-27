export interface FormState {
  text: string;
}

export interface NewMessageInputProps {
  onSubmit: (text: string) => void;
  loading?: boolean;
}
