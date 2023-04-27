import dayjs from 'dayjs';
import {
  MAX_LINE,
  BASE_LINE_HEIGHT,
  CONTAINER_OFFSET,
} from 'constants/general';

export const getMessageTime = (): string => {
  return dayjs().format('hh:mm A');
};

export const getTextMaxHeight = () => {
  return BASE_LINE_HEIGHT * MAX_LINE;
};

export const getContainerMaxHeight = (height?: number) => {
  if (!height) {
    return 0;
  }

  const maxHeight = getTextMaxHeight() + CONTAINER_OFFSET;

  return height < maxHeight ? height : maxHeight;
};
