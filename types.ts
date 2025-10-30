
export type View = 'home' | 'report' | 'track' | 'rewards';
export type Language = 'en' | 'hi';

export interface Bin {
  id: number;
  location: string;
  level: number;
  status: 'Good' | 'Needs Attention' | 'Full';
}

export interface Schedule {
  day: string;
  time: string;
  area: string;
}

export interface Reward {
  id: number;
  title: string;
  points: number;
}
