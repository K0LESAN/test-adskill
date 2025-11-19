import mockData from '@/model/mock-data';
import { Metrica } from '@/components/metrica';
import { formatPrice } from '@/utils/format-price';
import { Stack } from '@mui/material';
import { config } from './model';
import type { ConfigItem } from './index.interface';

export const Metrics = () => {
  return (
    <Stack direction={'row'} gap={6}>
      {Object.entries(mockData.currentMetrics).map(([key, metrica]) => {
        const typedKey = key as keyof ConfigItem;
        const { change, changeType, value } = metrica;
        const { icon, label, asPrice } = config[typedKey];
        const printValue = asPrice ? formatPrice(value) : value;

        return (
          <Metrica
            key={key}
            icon={icon}
            change={change}
            changeType={changeType}
            label={label}
            value={printValue}
          />
        );
      })}
    </Stack>
  );
};
