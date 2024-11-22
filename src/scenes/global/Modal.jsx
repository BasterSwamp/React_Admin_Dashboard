import { Box, Button, useTheme } from "@mui/material";
import ReactDom from "react-dom";
import { tokens } from "../../theme";

export default function Modal({ children, handleCloseModal }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return ReactDom.createPortal(
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "1rem",
      }}
    >
      <Button
        onClick={handleCloseModal}
        sx={{
          position: "absolute",
          inset: 0,
          background: colors.primary[800],
          opacity: 0.6,
          zIndex: 99,
          border: "none",
          width: "100%",
          boxShadow: "unset",
          "&:hover": {
            transform: "translate(0)",
            boxShadow: "unset",
          },
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 101,
          minWidth: "300px",
          margin: "0 auto",
          borderRadius: "15px",
          border: `1px solid ${colors.grey[100]}`,
          background: colors.primary[400],
          padding: "1.2rem",
          pt: "0rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            top: "10px",
            right: "12px",
            background: colors.primary[700],
            color: colors.grey[100],
            fontSize: "1rem",
            minWidth: 0,
            padding: "6px 10px",
            lineHeight: "1",
            "&:hover": {
              background: colors.primary[500],
            },
          }}
        >
          ×
        </Button>
        {children}
      </Box>
    </Box>,
    document.getElementById("portal")
  );
}
