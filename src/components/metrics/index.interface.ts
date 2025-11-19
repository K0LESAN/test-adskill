import type { FunctionComponent, SVGProps } from 'react';

export interface ConfigItem {
  label: string;
  asPrice?: boolean;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export type Config = Record<string, ConfigItem>;
