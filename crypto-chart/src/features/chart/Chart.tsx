import React, { FC, useEffect } from "react";
import { fetchCryptoData } from "./ChartSlice";
import { useAppDispatch } from "../../store/hooks";

const Chart: FC = () => {
  const dispatch = useAppDispatch();
  const [chartData, setChartData] = React.useState<object>();

  useEffect(() => {
    const getAssetsData = async () => {
      await dispatch(fetchCryptoData());
    };

    getAssetsData();
  }, []);

  return <div>Chart component</div>;
};

export default Chart;
