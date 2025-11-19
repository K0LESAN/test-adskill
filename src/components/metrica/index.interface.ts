import type { FunctionComponent, SVGProps } from 'react';

export interface MetricaProps {
  label: string;
  value: string | number;
  change: string | number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  changeType: 'increase' | 'decrease';
}
