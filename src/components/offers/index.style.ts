import { createStyles } from '@/utils/create-style';

export const styles = createStyles({
  title: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '120%',
  },
  activeChip: {
    color: '#079455',
    border: '1px solid #B5DFCC',
    bgColor: '#B5DFCC',
  },
  inactiveChip: {
    color: '#DA022A',
    bgColor: '#FDF2F4',
    border: '1px solid #F4B3BF',
  },
  moreButton: {
    width: '32px',
    height: '32px',
    transform: 'rotate(90deg)',
  },
});
