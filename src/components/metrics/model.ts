import type { Config } from './index.interface';
import FinanceIcon from '@/assets/icons/finance.svg?react';
import ClickIcon from '@/assets/icons/click.svg?react';
import CPCIcon from '@/assets/icons/cpc.svg?react';
import CPAIcon from '@/assets/icons/cpa.svg?react';

export const config: Config = {
  expenses: {
    label: 'Расходы',
    icon: FinanceIcon,
    asPrice: true,
  },
  clicks: {
    label: 'Клики',
    icon: ClickIcon,
  },
  cpc: {
    label: 'CPC',
    icon: CPCIcon,
  },
  cpa: {
    label: 'CPA',
    icon: CPAIcon,
    asPrice: true,
  },
};
