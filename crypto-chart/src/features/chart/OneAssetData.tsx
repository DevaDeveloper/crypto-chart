/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import { OneAssetDataProps } from "./models";
import {
  AllChartsHolder,
  BarChartHolder,
  ChartHolder,
  DivDataHolder,
  DivWrapper,
} from "./ChartUI/ChartUI";
import { useAppSelector } from "../../store/hooks";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import TVLLineChart from "../../components/TVLLineChart";
import { TvlLabel, AprLabels, randChange1, randChange2 } from "./TvlData";
import MultipleChart from "../../components/MultipleChart";

const USDT_WBNB_DATA: object[] = [];

const OneAssetData: FC<OneAssetDataProps> = ({ assetData }) => {
  const { APRDaily, APRStartValue, date, TVLDaily, TVLStartValue } =
    useAppSelector((state) => state.chart);
  const [dataChart, setDataChart] = useState(USDT_WBNB_DATA);
  const [labels, setLabels] = useState<number[]>([]);
  const [TVLStartVal] = useState<number>(TVLStartValue);
  const [Aprlabel] = useState<string[]>(AprLabels);
  const tempLabel: number[] = [];

  //making +5% increase daily and random increase daily (APR, TVL)
  const APRHistoryIncrease: any[] = [];
  const TVLDailyChange: number[] = [];
  const randChange: number[] = [];
  let temp = APRStartValue;
  let TVLTemp = TVLStartVal;

  let dateTemp = date;
  for (let i = 1; i <= 10; i++) {
    temp = temp * APRDaily + temp;
    TVLTemp = TVLTemp * TVLDaily + TVLTemp;
    dateTemp += 1;
    tempLabel.push(dateTemp);
    APRHistoryIncrease.push({ ARP: temp, date: dateTemp });
    TVLDailyChange.push(Number(TVLTemp.toFixed(2)));
    randChange.push(Math.floor(Math.random() * 10000));
  }

  useEffect(() => {
    setLabels(tempLabel);
    setDataChart((prevState) => [
      ...prevState,
      {
        id: assetData.assetId,
        asset: assetData.asset,
        APRHistory: APRHistoryIncrease,
        APRDaily: APRDaily,
        tvlChangeDailyValue: assetData.tvlChange24hValue,
      },
    ]);
  }, []);

  // APR data
  const chartReadyData = {
    // labels: APRHistoryIncrease.map((data) => data.date),
    labels: Aprlabel,
    datasets: [
      {
        label: "ASSET APR(day",
        data: APRHistoryIncrease.map((data) => data.ARP),
        backgroundColor: ["rgb(57,89,134, 0.8)"],
        borderColor: "rgb(158,71,198)",
        color: "#fff",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#fff",
        tension: 0.3,
        radius: 0,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
    ],
  };

  // TVL data
  const TVLChartReadyData = {
    labels: TvlLabel.map((data) => data.date),
    datasets: [
      {
        label: "ASSET TVL",
        data: TVLDailyChange,
        backgroundColor: ["rgb(57,89,134, 0.8)"],
        borderColor: "rgb(158,71,198)",
        color: "#fff",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#fff",
        tension: 0.3,
        radius: 0,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
    ],
  };

  // Bar chart
  const BarChartsReadyData = {
    labels: TvlLabel.map((data) => data.date),
    datasets: [
      {
        label: "Bar APR",
        data: randChange,
        backgroundColor: ["rgb(57,89,134, 0.8)"],
        borderColor: "rgb(158,71,198)",
        color: "#fff",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#fff",
        tension: 0.3,
        radius: 0,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
      {
        label: "ASSET THREE APR(day)",
        data: randChange2,
        backgroundColor: ["rgb(57,89,134, 0.8)"],
        borderColor: "#fff",
        color: "#fff",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#fff",
        tension: 0.2,
        radius: 2,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
    ],
  };

  //multiple charts
  const MultipleChartsReadyData = {
    labels: Aprlabel,
    datasets: [
      {
        label: "ASSET ONE APR(day)",
        data: randChange,
        backgroundColor: ["rgb(57,89,134, 0.8)"],
        borderColor: "rgb(158,71,198)",
        color: "#fff",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#fff",
        tension: 0.2,
        radius: 2,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
      {
        label: "ASSET TWO APR(day)",
        data: randChange1,
        backgroundColor: ["#fff"],
        borderColor: "#fff",
        color: "#fff",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#fff",
        tension: 0.2,
        radius: 2,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
      {
        label: "ASSET THREE APR(day)",
        data: randChange2,
        backgroundColor: ["skyblue"],
        borderColor: "skyblue",
        color: "#fff",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#fff",
        tension: 0.2,
        radius: 2,
        hitRadius: 20,
        defaultFontColor: "#fff",
      },
    ],
  };

  return (
    <>
      <DivDataHolder>
        Part of information fetched from API about asset:
      </DivDataHolder>
      <DivWrapper>
        <DivDataHolder>ASSET: {assetData?.asset}</DivDataHolder>
        <DivDataHolder>ASSET ID: {assetData?.assetId}</DivDataHolder>
        <DivDataHolder>
          ASSET BLOCKCHAIN:&nbsp;
          {assetData?.blockchain}
        </DivDataHolder>
        <DivDataHolder>aprDaily: {assetData?.aprDaily}</DivDataHolder>
        <DivDataHolder>aprWeekly: {assetData?.aprWeekly}</DivDataHolder>
        <DivDataHolder>aprYearly: {assetData?.aprYearly}</DivDataHolder>
        <DivDataHolder>FARM ID: {assetData?.farmId}</DivDataHolder>
        <DivDataHolder>date Added: {assetData?.dateAdded}</DivDataHolder>
        <DivDataHolder>tvlChange24h: {assetData?.tvlChange24h}</DivDataHolder>
        <DivDataHolder>
          tvlChange24hValue: {assetData?.tvlChange24hValue}
        </DivDataHolder>
      </DivWrapper>

      <AllChartsHolder>
        <ChartHolder>
          <LineChart chartDataProps={chartReadyData} />
        </ChartHolder>
        <ChartHolder>
          <TVLLineChart chartDataProps={TVLChartReadyData} />
        </ChartHolder>
      </AllChartsHolder>
      <BarChartHolder>
        <BarChart chartDataProps={BarChartsReadyData} />
      </BarChartHolder>

      <BarChartHolder>
        <MultipleChart chartDataProps={MultipleChartsReadyData} />
      </BarChartHolder>
    </>
  );
};

export default OneAssetData;
