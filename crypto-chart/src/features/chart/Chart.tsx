import React, { FC, useEffect } from "react";
import { fetchCryptoData, fetchCryptoDataJson } from "./ChartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import OneAssetData from "./OneAssetData";

const Chart: FC = () => {
  const dispatch = useAppDispatch();
  const cryptoData: any[] = useAppSelector((state) => state.chart.assetData);
  const [chartData, setChartData] = React.useState<object>();

  console.log(typeof cryptoData);
  useEffect(() => {
    const getAssetsData = async () => {
      await dispatch(fetchCryptoData());
    };
    const getAssetsDataJSON = async () => {
      await dispatch(fetchCryptoDataJson());
    };

    getAssetsData();
    getAssetsDataJSON();
  }, []);

  return (
    <>
      <div>Chart component TESTING THIS</div>
      {cryptoData &&
        cryptoData
          .filter((data) => data.assetId === "BNB_Pancakeswap__WBNB-BUSD")
          .map((data) => <OneAssetData assetData={data} key={data.assetId} />)}
    </>
  );
};

export default Chart;
