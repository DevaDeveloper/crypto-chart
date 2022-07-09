import React, { FC, useEffect } from "react";
import { fetchCryptoData, fetchCryptoDataJson } from "./ChartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AssetAndChartsData from "./AssetAndChartsData";
import { Loading } from "./ChartUI/ChartUI";

const Chart: FC = () => {
  const dispatch = useAppDispatch();
  const cryptoData: any[] = useAppSelector((state) => state.chart.assetData);
  const loadingState = useAppSelector((state) => state.chart.status);

  useEffect(() => {
    const getAssetsData = async () => {
      await dispatch(fetchCryptoData());
    };
    const getAssetsDataJSON = async () => {
      await dispatch(fetchCryptoDataJson());
    };

    getAssetsData();
    getAssetsDataJSON();
  }, [dispatch]);

  return (
    <>
      {loadingState === "pending" && <Loading>LOADING...</Loading>}
      {loadingState === "rejected" && <Loading>CONNECTION ERROR...</Loading>}

      {cryptoData ? (
        cryptoData
          .filter((data) => data.assetId === "BNB_Pancakeswap__USDT-WBNB")
          .map((data) => (
            <AssetAndChartsData assetData={data} key={data.assetId} />
          ))
      ) : (
        <Loading>
          CONNECTION ERROR...PLEASE CHECK YOUR INTERNET CONNECTION OR IS YOUR
          JSON SERVER RUNNINNG CORRECTLY !
        </Loading>
      )}
    </>
  );
};

export default Chart;
