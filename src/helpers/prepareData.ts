import dayjs from 'dayjs';

export const getMessageTime = (): string => {
  return dayjs().format('hh:mm A');
};
