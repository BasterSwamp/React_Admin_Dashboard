import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

export default function Line() {
  return (
    <Box m="20px">
      <Header
        title="Line Chart"
        subtitle="A Line Chart illustrating the popularity of various modes of transportation across different countries."
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
