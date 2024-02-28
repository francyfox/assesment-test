export interface IMarket {
  name: string;
  status: {
    today: string
    totalProducts: number
    availableProducts: number
    nonAvailableProducts: number
  };
}