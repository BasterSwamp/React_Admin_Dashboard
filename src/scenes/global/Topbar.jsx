import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <i className="fa-regular fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun"></i>
            )}
          </IconButton>
          <IconButton>
            <i className="fa-regular fa-bell"></i>
          </IconButton>
          <IconButton>
            <i className="fa-solid fa-gear"></i>
          </IconButton>
          <IconButton>
            <i className="fa-regular fa-user"></i>
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
