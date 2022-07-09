import { TVLLabelInterface } from "./models";

const TvlLabel: TVLLabelInterface[] = [
  {
    id: "1",
    date: "May 22",
    year: "2022",
  },
  {
    id: "2",
    date: "May 25",
    year: "2022",
  },
  {
    id: "3",
    date: "May 27",
    year: "2022",
  },
  {
    id: "4",
    date: "May 30",
    year: "2022",
  },
  {
    id: "5",
    date: "Jun 02",
    year: "2022",
  },
  {
    id: "6",
    date: "Jun 05",
    year: "2022",
  },
  {
    id: "7",
    date: "Jun 08",
    year: "2022",
  },
  {
    id: "8",
    date: "Jun 11",
    year: "2022",
  },
  {
    id: "9",
    date: "Jun 14",
    year: "2022",
  },
  {
    id: "10",
    date: "Jun 17",
    year: "2022",
  },
];

const AprLabels: string[] = [
  "Jun 23",
  "Jun 24",
  "Jun 25",
  "Jun 26",
  "Jun 27",
  "Jun 28",
  "Jun 29",
  "Jun 30",
  "July 1",
  "July 2",
];

//rand chart data
//rand charts data
const randChange1: number[] = [];
const randChange2: number[] = [];
for (let i = 1; i <= 10; i++) {
  randChange1.push(Math.floor(Math.random() * 10000));
  randChange2.push(Math.floor(Math.random() * 10000));
}
export { TvlLabel, AprLabels, randChange1, randChange2 };
