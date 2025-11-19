import { createStyles } from '@/utils/create-style';

export const styles = createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '326px',
    height: '138px',
    padding: 6,
    borderRadius: 6,
  },
  iconButton: {
    width: '40px',
    height: '40px',
    bgcolor: '#F3F5FA !important',
  },
  icon: {
    color: 'transparent',
  },
  stonks: {
    width: '24px',
    height: '24px',
  },
  label: {
    fontWeight: '400',
    fontSize: '16px',
  },
  value: {
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '120%',
  },
});
