import { useForm } from 'react-hook-form';
import { FormState } from './types';
import styles from './NewMessageInput.module.scss';

const NewMessageInput = () => {
  const { register, handleSubmit, watch, resetField } = useForm<FormState>();

  const text = watch('text');

  const handleFormSubmit = ({ text }: FormState) => {
    // TODO:  impement submit form
    console.log(`value`, text);
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
        click
      </button>
    </form>
  );
};

export default NewMessageInput;
