'use client';

import { createTheme, type SxProps as BaseSxProps } from '@mui/material';
import { ruRU as coreRu } from '@mui/material/locale';
import { spacing } from './spacing';

export const theme = createTheme(
  {
    cssVariables: true,
    spacing,
  },
  coreRu
);

export type Theme = typeof theme;
export type SxProps = BaseSxProps<Theme>;
