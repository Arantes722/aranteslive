export interface Game {
  name: string;
  category: string;
}

export interface Stream {
  title: string;
  description: string;
  viewers: number;
  live: boolean;
}

export interface ContentCard {
  title: string;
  description: string;
  category: string;
}