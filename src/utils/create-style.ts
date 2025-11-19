import type { SxProps } from '../theme';

export const createStyles = <T extends Record<string, SxProps>>(
  style: T
): Readonly<T> => style;
