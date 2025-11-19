export interface GridItem {
  id: string;
  name: string;
  status: 'active' | 'paused';
  launchDate: string;
  balance: number;
  spent: number;
}
