export interface InitialChartState {
  data: any;
  token: string;
  status: string;
  assetData: any[];
  APRDaily: number;
  APRStartValue: number;
  date: number;
  TVLDaily: number;
  TVLStartValue: number;
  errorMessages: string;
}
export interface OneAssetDataProps {
  assetData: any;
}

export interface TVLLabelInterface {
  id: string;
  date: string;
  year: string;
}
