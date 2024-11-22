import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <Box ml="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hello there!" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}
