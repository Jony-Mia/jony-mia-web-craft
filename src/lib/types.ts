// Types for RateTable and Pricing components
export type Service = {
  id: string;
  name: string;
  description: string;
  rate: number;
  rateType: 'hourly' | 'daily' | 'project';
};

export type Tier = {
  id: string;
  name: string;
  description: string;
  price: string;
  ctaText: string;
  highlighted: boolean;
  services: Service[];
};
