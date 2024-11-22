import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Bar() {
  return (
    <Box m="20px">
      <Header
        title="Bar Chart"
        subtitle="A Bar Chart illustrating cryptocurrency demand across various countries."
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
