import { useForm } from 'react-hook-form';
import Icon from 'components/common/Icon';
import { FormState, NewMessageInputProps } from './types';
import styles from './NewMessageInput.module.scss';

const NewMessageInput = ({ onSubmit }: NewMessageInputProps) => {
  const { register, handleSubmit, watch, resetField } = useForm<FormState>();

  const text = watch('text');

  const handleFormSubmit = ({ text }: FormState) => {
    onSubmit(text);
    resetField('text');
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        autoComplete="off"
        placeholder="Start your conversation here"
        className={styles.input}
        {...register('text')}
      />

      <button className={styles.submitButton} type="submit" disabled={!text}>
        <Icon name="send" />
      </button>
    </form>
  );
};

export default NewMessageInput;
