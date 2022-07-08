import React, { FC } from "react";
import { OneAssetDataProps } from "./models";

const OneAssetData: FC<OneAssetDataProps> = ({ assetData }) => {
  return (
    <>
      <div>OneAssetData</div>
      <div>ASSET: {assetData?.asset}</div>
      <div>ASSET ID: {assetData?.assetId}</div>
      <div>
        ASSET BLOCKCHAIN:
        {assetData?.blockchain}
      </div>
      <div>aprDaily: {assetData?.aprDaily}</div>
      <div>aprWeekly: {assetData?.aprWeekly}</div>
      <div>aprYearly: {assetData?.aprYearly}</div>
      <div>FARM ID: {assetData?.farmID}</div>
      <div>date Added: {assetData?.dateAdded}</div>
    </>
  );
};

export default OneAssetData;
