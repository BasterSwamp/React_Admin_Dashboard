import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie() {
  return (
    <Box m="20px">
      <Header
        title="Pie Chart"
        subtitle="A Simple Pie Chart illustrating the distribution of websites using various frameworks."
      />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
