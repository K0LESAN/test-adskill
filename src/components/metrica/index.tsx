import { Card, IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import type { FC } from 'react';
import type { MetricaProps } from './index.interface';
import StonksIcon from '@/assets/icons/stonks.svg?react';
import AntiStonksIcon from '@/assets/icons/anti-stonks.svg?react';
import { styles } from './index.style';

export const Metrica: FC<MetricaProps> = ({
  label,
  change,
  changeType,
  icon,
  value,
}) => {
  const isIncrease = changeType === 'increase';
  const stonksIcon = isIncrease ? StonksIcon : AntiStonksIcon;
  const color = isIncrease ? '#079455' : '#DA022A';

  return (
    <Card sx={styles.card}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography sx={styles.label} color='#212626'>
          {label}
        </Typography>
        <IconButton sx={styles.iconButton} disabled>
          <SvgIcon sx={styles.icon} component={icon} inheritViewBox />
        </IconButton>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography sx={styles.value} color='#212626'>
          {value}
        </Typography>
        <Stack direction={'row'} alignItems={'flex-end'} gap={1}>
          <IconButton sx={styles.stonks} disabled>
            <SvgIcon sx={styles.icon} component={stonksIcon} inheritViewBox />
          </IconButton>
          <Typography color={color}>{change}%</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
