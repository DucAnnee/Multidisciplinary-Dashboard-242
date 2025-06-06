import { AppBar, Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import styles from "../styles/Appbar.module.css";

const NAV_BUTTONS = [{ name: "Home", path: "/", icon: <HomeIcon /> }];

export default function Appbar() {
  const navigate = useNavigate();
  const render_nav = () => {
    return NAV_BUTTONS.map((page) => {
      return (
        <Button
          key={page.path}
          variant="text"
          startIcon={page.icon}
          onClick={() => navigate(page.path)}
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            color: "white",
            textTransform: "none",
            justifyContent: "center",
            fontSize: "1.2rem",
            padding: "10px 20px",
            // if the page is active, change the background color
            backgroundColor:
              window.location.pathname === page.path
                ? "rgba(7, 59, 58, 0.6)"
                : "transparent",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          {page.name}
        </Button>
      );
    });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "12%",
        height: "100vh",
        backgroundColor: "primary.main",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "14%",
          p: 1,
        }}
      >
        <Typography fontSize="1.2rem" sx={{ color: "white" }}>
          Bok Choy Farm
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "40%",
          width: "100%",
        }}
      >
        {render_nav()}
      </Box>
    </AppBar>
  );
}
