import styled from "@emotion/styled";

const DivDataHolder = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const DivWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0px 4px 24px rgba(43, 33, 36, 0.06);",
  maxWidth: "500px",
  margin: "20px auto",
  padding: "30px",
  borderRadius: "8px",
}));

const ChartHolder = styled("div")(() => ({
  flex: "0 0 45%",
  background: "rgb(45,52,85)",
  borderRadius: "8px",
  padding: "20px 0",
  "css-l5lfso": {
    background: "rgb(45,52,85)",
    canvas: {
      background: "rgb(45,52,85)",
    },
  },
}));
const AllChartsHolder = styled("div")(() => ({
  width: "95%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  background: "#20253e",
  padding: "20px 0",
  margin: "20px auto",
}));

const BarChartHolder = styled("div")(() => ({
  width: "70vw",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto 30px auto",
  background: "rgb(45,52,85)",
  borderRadius: "8px",
  padding: "20px 0",
  "css-l5lfso": {
    background: "rgb(45,52,85)",
    canvas: {
      background: "rgb(45,52,85)",
    },
  },
}));

const Loading = styled("p")(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  fontSize: "60px",
  fontWeight: 700,
  textAlign: "center",
}));

export {
  DivDataHolder,
  DivWrapper,
  ChartHolder,
  AllChartsHolder,
  BarChartHolder,
  Loading,
};
