import {
  Button,
  Chip,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DataGrid } from '@mui/x-data-grid';
import MonitorIcon from '@/assets/icons/monitor.svg?react';
import mockData from '@/model/mock-data';
import { styles } from './index.style';
import { formatPrice } from '@/utils/format-price';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const startIcon = <SvgIcon component={MonitorIcon} inheritViewBox />;
const endIcon = <KeyboardArrowDownIcon />;

export const Offers = () => {
  return (
    <Stack
      width={'95%'}
      p={6}
      gap={6}
      borderRadius={6}
      border={'1px solid #E7E7F5'}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography sx={styles.title}>Офферы</Typography>
        <Button variant='outlined' startIcon={startIcon} endIcon={endIcon}>
          Экспорт
        </Button>
      </Stack>
      <DataGrid
        checkboxSelection
        hideFooterPagination
        hideFooter
        hideFooterSelectedRowCount
        rows={mockData.offers}
        getRowId={(item) => item.id}
        disableColumnResize
        columns={[
          {
            field: 'name',
            headerName: 'Название офера',
            width: 279,
          },
          {
            field: 'platforms',
            headerName: 'Площадки',
            flex: 1,
            renderCell: ({ row }) => {
              return row.platforms.map(({ name, id }) => (
                <Chip key={id} label={name} />
              ));
            },
          },
          {
            field: 'launchDate',
            headerName: 'Дата запуска',
            flex: 1,
            renderCell({ row }) {
              return new Date(row.launchDate).toLocaleDateString('ru-Ru');
            },
          },
          {
            field: 'balance',
            headerName: 'Баланс',
            valueFormatter: formatPrice,
            flex: 1,
          },
          {
            field: 'spent',
            headerName: 'Расход',
            valueFormatter: formatPrice,
            flex: 1,
          },
          {
            field: 'status',
            headerName: 'Статус',
            width: 187,
            renderCell: ({ row }) => {
              return (
                <Chip
                  sx={
                    row.status === 'active'
                      ? styles.activeChip
                      : styles.inactiveChip
                  }
                  label={row.status === 'active' ? 'Активный' : 'Остановлен'}
                />
              );
            },
          },
          {
            type: 'actions',
            field: '',
            getActions: () => [
              <IconButton sx={styles.moreButton}>
                <MoreVertIcon />
              </IconButton>,
            ],
          },
        ]}
      />
    </Stack>
  );
};
